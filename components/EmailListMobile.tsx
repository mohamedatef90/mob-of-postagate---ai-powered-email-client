import React, { useState, useRef, useMemo } from 'react';
import type { Thread, User } from '../types';
import EmailListItemMobile from './EmailListItem.mobile';
import { Button } from './ui/Button';

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

const EMPTY_STATE_CONFIG: { [key: string]: { icon: string; text: string } } = {
  snoozed: { icon: 'fa-regular fa-clock', text: 'Nothing is snoozed' },
  sent: { icon: 'fa-regular fa-paper-plane', text: 'Nothing in Sent' },
  drafts: { icon: 'fa-regular fa-file-lines', text: 'No saved drafts' },
  archive: { icon: 'fa-solid fa-archive', text: 'The Archive is Empty' },
  folders: { icon: 'fa-regular fa-folder', text: 'This folder is empty' },
  finance: { icon: 'fa-solid fa-piggy-bank', text: 'No financial emails' },
  feedback: { icon: 'fa-solid fa-thumbs-up', text: 'No feedback emails' },
  travel: { icon: 'fa-solid fa-plane-departure', text: 'No travel emails' },
  default: { icon: 'fa-regular fa-envelope-open', text: 'This folder is empty' },
};

interface EmailListMobileProps {
  threads: Thread[];
  selectedThreadId: string | null;
  onSelectThread: (id: string) => void;
  activeView?: string;
  onSnoozeClick: (threadId: string, anchorEl: HTMLElement) => void;
  onOpenKebabMenu: (threadId: string, anchorEl: HTMLElement) => void;
  selectedThreadIds: string[];
  onToggleSelection: (id: string) => void;
  onBulkArchive: () => void;
  onBulkDelete: () => void;
  onBulkMarkAsRead: () => void;
  onContextMenu: (event: React.MouseEvent, threadId: string) => void;
  onArchive: (threadId: string) => void;
  onDelete: (threadId: string) => void;
  onMarkAsRead: (threadId: string, isRead: boolean) => void;
  onToggleStar: (threadId: string) => void;
  onNavigate: (view: string) => void;
  toggleEmailSidebar: () => void;
  onClearSelection: () => void;
  onCompose: () => void;
  currentUser: User;
}

const THREAD_ITEM_HEIGHT = 92;
const SECTION_HEADER_HEIGHT = 40;
const OVERSCAN_COUNT = 5;

const formatViewTitle = (view: string) => {
    if (view === 'inbox') return 'Inbox';
    if (view === 'all-sent') return 'All Sent';
    if (view === 'todos') return 'To Do';
    return view.charAt(0).toUpperCase() + view.slice(1);
};

const EmailListMobile: React.FC<EmailListMobileProps> = ({ 
    threads, 
    selectedThreadId, 
    onSelectThread, 
    activeView = 'inbox', 
    onSnoozeClick, 
    onOpenKebabMenu, 
    selectedThreadIds, 
    onToggleSelection, 
    onBulkArchive, 
    onBulkDelete, 
    onBulkMarkAsRead, 
    onContextMenu,
    onArchive,
    onDelete,
    onMarkAsRead,
    onToggleStar,
    onNavigate,
    toggleEmailSidebar,
    onClearSelection,
    onCompose,
    currentUser
}) => {
    
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      setScrollTop(e.currentTarget.scrollTop);
  };
    
  const { allItems, totalHeight } = useMemo(() => {
    const today = new Date();
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const startOfLastWeek = new Date(startOfToday);
    startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);

    const todayThreads = threads.filter(t => new Date(t.timestamp) >= startOfToday);
    const lastWeekThreads = threads.filter(t => new Date(t.timestamp) < startOfToday && new Date(t.timestamp) >= startOfLastWeek);
    const olderThreads = threads.filter(t => new Date(t.timestamp) < startOfLastWeek);
      
    const items: any[] = [];
    let currentOffset = 0;

    const addSection = (title: string, threadsInSection: Thread[]) => {
      if (threadsInSection.length > 0) {
        items.push({ type: 'header', title, height: SECTION_HEADER_HEIGHT, offset: currentOffset });
        currentOffset += SECTION_HEADER_HEIGHT;
        threadsInSection.forEach(thread => {
          items.push({ type: 'thread', data: thread, height: THREAD_ITEM_HEIGHT, offset: currentOffset });
          currentOffset += THREAD_ITEM_HEIGHT;
        });
      }
    };
    
    addSection('TODAY', todayThreads);
    addSection('LAST WEEK', lastWeekThreads);
    addSection('OLDER', olderThreads);
      
    return { allItems: items, totalHeight: currentOffset };
  }, [threads]);

  const containerHeight = containerRef.current?.clientHeight || 0;
  
  const startIndex = useMemo(() => {
      let start = 0;
      while (start < allItems.length && allItems[start].offset + allItems[start].height < scrollTop) {
          start++;
      }
      return Math.max(0, start - OVERSCAN_COUNT);
  }, [allItems, scrollTop]);

  const endIndex = useMemo(() => {
      let end = startIndex;
      while (end < allItems.length && allItems[end].offset < scrollTop + containerHeight) {
          end++;
      }
      return Math.min(allItems.length - 1, end + OVERSCAN_COUNT);
  }, [allItems, startIndex, scrollTop, containerHeight]);

  const visibleItems = allItems.slice(startIndex, endIndex + 1);
  
  const title = formatViewTitle(activeView);
  const isBulkMode = selectedThreadIds.length > 0;
  
  const pillViews = ['inbox', 'todos', 'archive'];
  const showPillMenu = pillViews.includes(activeView) && !isBulkMode;

  const MobileHeader = (
    <div className="p-2 border-b border-border flex flex-col flex-shrink-0 bg-background/80 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        {isBulkMode ? (
          <>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={onClearSelection} className="h-10 w-10 text-muted-foreground" aria-label="Cancel selection">
                  <i className="fa-solid fa-xmark w-5 h-5"></i>
              </Button>
              <span className="font-semibold text-lg">{selectedThreadIds.length} selected</span>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={onBulkArchive} className="h-10 w-10 text-muted-foreground" aria-label="Archive selected"><i className="fa-solid fa-archive w-5 h-5"></i></Button>
              <Button variant="ghost" size="icon" onClick={onBulkDelete} className="h-10 w-10 text-muted-foreground" aria-label="Delete selected"><i className="fa-solid fa-trash w-5 h-5"></i></Button>
              <Button variant="ghost" size="icon" onClick={onBulkMarkAsRead} className="h-10 w-10 text-muted-foreground" aria-label="Mark selected as read"><i className="fa-regular fa-envelope-open w-5 h-5"></i></Button>
            </div>
          </>
        ) : (
          <>
              <div className="flex items-center space-x-2">
                  <Button 
                      variant="ghost"
                      size="icon"
                      onClick={toggleEmailSidebar}
                      className="h-10 w-10 text-muted-foreground"
                      aria-label="Toggle menu"
                  >
                      <i className="fa-solid fa-bars w-5 h-5"></i>
                  </Button>
                  <div>
                    <h1 className="font-semibold text-lg leading-tight">{title}</h1>
                    <p className="text-xs text-muted-foreground leading-tight">{currentUser.email}</p>
                  </div>
              </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-card flex flex-col h-full w-full dark:backdrop-blur-xl relative">
      {MobileHeader}
      {threads.length === 0 ? (
        (() => {
            const config = EMPTY_STATE_CONFIG[activeView] || EMPTY_STATE_CONFIG.default;
            return (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-4 animate-fadeIn">
                <i className={`${config.icon} text-5xl mb-4`}></i>
                <p className="font-medium text-foreground">{config.text}</p>
                {activeView === 'archive' && <p className="text-sm mt-1">Archived messages will appear here.</p>}
                {activeView === 'snoozed' && <p className="text-sm mt-1">Snoozed emails will show up here until their time comes.</p>}
              </div>
            );
        })()
      ) : (
        <div ref={containerRef} onScroll={handleScroll} className="flex-1 overflow-y-auto no-scrollbar">
          <div style={{ height: totalHeight, position: 'relative' }}>
            {visibleItems.map(item => {
              if (item.type === 'header') {
                return (
                  <div key={item.title} style={{ position: 'absolute', top: item.offset, height: item.height, width: '100%' }}>
                    <h2 className="px-3 pt-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <span>{item.title}</span>
                    </h2>
                  </div>
                );
              }
              
              const thread = item.data;
              return (
                <div key={thread.id} style={{ position: 'absolute', top: item.offset, height: item.height, width: '100%' }}>
                  <EmailListItemMobile
                    thread={thread}
                    isSelected={thread.id === selectedThreadId}
                    isSelectedForBulk={selectedThreadIds.includes(thread.id)}
                    onSelect={onSelectThread}
                    selectedThreadIds={selectedThreadIds}
                    onToggleSelection={onToggleSelection}
                    onSnoozeClick={onSnoozeClick}
                    onOpenKebabMenu={onOpenKebabMenu}
                    onContextMenu={onContextMenu}
                    onArchive={onArchive}
                    onDelete={onDelete}
                    onMarkAsRead={onMarkAsRead}
                    onToggleStar={onToggleStar}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
       {showPillMenu && (
          <div className="absolute top-[50px] left-1/2 -translate-x-1/2 z-10 w-[80%] max-w-xs animate-fadeInDown" style={{animationDuration: '0.3s'}}>
              <div className="bg-card/70 backdrop-blur-xl rounded-full shadow-lg border border-white/20 flex p-1 justify-around space-x-1">
                  {pillViews.map(view => {
                      const isActive = activeView === view;
                      return (
                        <button 
                          key={view}
                          onClick={() => onNavigate(view)}
                          className={cn(
                              "w-full text-center px-3 py-2 text-xs font-semibold rounded-full transition-all duration-200",
                              isActive
                                ? 'bg-accent text-accent-foreground shadow-sm'
                                : 'text-muted-foreground hover:bg-accent/50'
                          )}
                        >
                          {formatViewTitle(view)}
                        </button>
                      )
                  })}
              </div>
          </div>
      )}
       <div className="absolute bottom-28 right-4 z-10">
          <button
            onClick={onCompose}
            className="h-14 w-14 rounded-full bg-primary/80 backdrop-blur-lg text-primary-foreground flex items-center justify-center shadow-lg border border-white/20 hover:bg-primary/90 transition-all duration-200 animate-scaleIn"
            aria-label="Compose new email"
          >
              <i className="fa-regular fa-envelope text-xl"></i>
          </button>
      </div>
    </div>
  );
};

export default EmailListMobile;