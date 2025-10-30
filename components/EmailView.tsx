import React, { useState, useEffect, useRef, useCallback } from 'react';
import EmailListHeader from './EmailListHeader';
import EmailList from './EmailList';
import EmailDetailHeader from './EmailDetailHeader';
import EmailDetailHeaderMobile from './EmailDetailHeader.mobile';
import EmailDetail from './EmailDetail';
import EmailDetailMobile from './EmailDetail.mobile';
import AIAssistant from './AIAssistant';
import type { Thread, Message, User } from '../types';
import Resizer from './ui/Resizer';
import EmailListMobile from './EmailListMobile';

interface EmailViewProps {
  filteredThreads: Thread[];
  selectedThreadId: string | null;
  handleSelectThread: (id: string) => void;
  activeEmailView: string;
  handleOpenSnooze: (threadId: string, anchorEl: HTMLElement) => void;
  selectedThread: Thread | null;
  toggleAIAssistant: () => void;
  handleBack: () => void;
  setIsDiscoverModalOpen: (isOpen: boolean) => void;
  handleScheduleMeeting: () => void;
  handleUnsnoozeThread: (threadId: string) => void;
  handleSummarizeThread: () => void;
  threadSummary: {
    threadId: string | null;
    summary: string | null;
    isLoading: boolean;
    error: string | null;
  };
  setThreadSummary: React.Dispatch<React.SetStateAction<{
    threadId: string | null;
    summary: string | null;
    isLoading: boolean;
    error: string | null;
  }>>;
  isAIAssistantOpen: boolean;
  handleCloseAIAssistant: () => void;
  aiAssistantMode: 'default' | 'scheduleMeeting';
  selectedThreadIds: string[];
  handleToggleSelection: (id: string) => void;
  handleClearSelection: () => void;
  handleBulkArchive: () => void;
  handleBulkDelete: () => void;
  handleBulkMarkAsRead: () => void;
  handleOpenContextMenu: (event: React.MouseEvent, threadId: string) => void;
  handleOpenKebabMenu: (threadId: string, anchorEl: HTMLElement) => void;
  showUnreadOnly: boolean;
  onToggleUnreadFilter: () => void;
  handleComposeInteraction: (thread: Thread, type: 'reply' | 'reply-all' | 'forward', messageToReplyTo?: Message) => void;
  handleArchiveThread: (threadId: string) => void;
  handleDeleteThread: (threadId: string) => void;
  handleMarkAsReadThread: (threadId: string, isRead: boolean) => void;
  handleToggleStarThread: (threadId: string) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onOpenSearchFilters: (anchorEl: HTMLElement) => void;
  isSearching: boolean;
  areFiltersActive: boolean;
  toggleEmailSidebar: () => void;
  onNavigate: (view: string, domain?: 'hogwarts' | 'liverpool') => void;
  onCompose: () => void;
  isMobile: boolean;
  currentUser: User;
}

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

const EmailView: React.FC<EmailViewProps> = ({
  filteredThreads,
  selectedThreadId,
  handleSelectThread,
  activeEmailView,
  handleOpenSnooze,
  selectedThread,
  toggleAIAssistant,
  handleBack,
  setIsDiscoverModalOpen,
  handleScheduleMeeting,
  handleUnsnoozeThread,
  handleSummarizeThread,
  threadSummary,
  setThreadSummary,
  isAIAssistantOpen,
  handleCloseAIAssistant,
  aiAssistantMode,
  selectedThreadIds,
  handleToggleSelection,
  handleClearSelection,
  handleBulkArchive,
  handleBulkDelete,
  handleBulkMarkAsRead,
  handleOpenContextMenu,
  handleOpenKebabMenu,
  showUnreadOnly,
  onToggleUnreadFilter,
  handleComposeInteraction,
  handleArchiveThread,
  handleDeleteThread,
  handleMarkAsReadThread,
  handleToggleStarThread,
  searchQuery,
  onSearchQueryChange,
  onOpenSearchFilters,
  isSearching,
  areFiltersActive,
  toggleEmailSidebar,
  onNavigate,
  onCompose,
  isMobile,
  currentUser
}) => {
  // Sidebar resizing logic
  const [listWidth, setListWidth] = useState(384);
  const isResizingList = useRef(false);
  const startListX = useRef(0);
  const startListWidth = useRef(0);

  const handleListMouseDown = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      isResizingList.current = true;
      startListX.current = e.clientX;
      startListWidth.current = listWidth;
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
  }, [listWidth]);

  const handleListMouseMove = useCallback((e: MouseEvent) => {
      if (!isResizingList.current) return;
      const deltaX = e.clientX - startListX.current;
      const newWidth = startListWidth.current + deltaX;
      const minWidth = 300;
      const maxWidth = 600;
      setListWidth(Math.max(minWidth, Math.min(newWidth, maxWidth)));
  }, []);

  const handleListMouseUp = useCallback(() => {
      isResizingList.current = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
  }, []);

  useEffect(() => {
      window.addEventListener('mousemove', handleListMouseMove);
      window.addEventListener('mouseup', handleListMouseUp);
      return () => {
          window.removeEventListener('mousemove', handleListMouseMove);
          window.removeEventListener('mouseup', handleListMouseUp);
      };
  }, [handleListMouseMove, handleListMouseUp]);
  
  const handleSelectThreadAndSearch = (id: string) => {
    if (isSearching) {
      // In a real app, this might involve resetting search and navigating to the email's folder
      console.log("Selecting thread from search results. A real app might navigate to its location.");
    }
    handleSelectThread(id);
  }

  if (isMobile) {
    return (
      <div className="flex flex-col h-full w-full overflow-hidden">
        <div className={cn("h-full w-full", selectedThreadId ? "hidden" : "block")}>
            <EmailListMobile
              threads={filteredThreads}
              selectedThreadId={selectedThreadId}
              onSelectThread={handleSelectThreadAndSearch}
              activeView={activeEmailView}
              onSnoozeClick={handleOpenSnooze}
              selectedThreadIds={selectedThreadIds}
              onToggleSelection={handleToggleSelection}
              onClearSelection={handleClearSelection}
              onBulkArchive={handleBulkArchive}
              onBulkDelete={handleBulkDelete}
              onBulkMarkAsRead={handleBulkMarkAsRead}
              onContextMenu={handleOpenContextMenu}
              onArchive={handleArchiveThread}
              onDelete={handleDeleteThread}
              onMarkAsRead={handleMarkAsReadThread}
              onToggleStar={handleToggleStarThread}
              onNavigate={onNavigate}
              toggleEmailSidebar={toggleEmailSidebar}
              onOpenKebabMenu={handleOpenKebabMenu}
              onCompose={onCompose}
              currentUser={currentUser}
            />
        </div>
        <div className={cn("h-full w-full flex flex-col", selectedThreadId ? "flex" : "hidden")}>
          <EmailDetailHeaderMobile
            thread={selectedThread}
            onToggleAIAssistant={toggleAIAssistant}
            onBack={handleBack}
            isDetailView={!!selectedThreadId}
            onDiscoverClick={() => setIsDiscoverModalOpen(true)}
            onScheduleMeetingClick={handleScheduleMeeting}
            onSnoozeClick={(e) => selectedThread && handleOpenSnooze(selectedThread.id, e.currentTarget)}
            onOpenKebabMenu={handleOpenKebabMenu}
            onUnsnooze={handleUnsnoozeThread}
            onSummarize={handleSummarizeThread}
            isSummarizing={threadSummary.isLoading}
            onComposeInteraction={(type) => selectedThread && handleComposeInteraction(selectedThread, type)}
            onToggleStar={() => selectedThread && handleToggleStarThread(selectedThread.id)}
            searchQuery={searchQuery}
            onSearchQueryChange={onSearchQueryChange}
            onOpenSearchFilters={(el) => onOpenSearchFilters(el)}
            areFiltersActive={areFiltersActive}
          />
          <EmailDetailMobile
            thread={selectedThread}
            summaryState={threadSummary}
            onClearSummary={() => setThreadSummary({ threadId: null, summary: null, isLoading: false, error: null })}
            onComposeInteraction={(type, msg) => selectedThread && handleComposeInteraction(selectedThread, type, msg)}
            onToggleStar={() => selectedThread && handleToggleStarThread(selectedThread.id)}
          />
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex h-full w-full">
      <div 
        style={{ width: `${listWidth}px` }}
        className="flex flex-col h-full flex-shrink-0"
      >
        <EmailListHeader 
            isSearching={isSearching} 
            selectedThreadIds={selectedThreadIds}
        />
        <EmailList
          threads={filteredThreads}
          selectedThreadId={selectedThreadId}
          onSelectThread={handleSelectThreadAndSearch}
          activeView={activeEmailView}
          onSnoozeClick={handleOpenSnooze}
          selectedThreadIds={selectedThreadIds}
          onToggleSelection={handleToggleSelection}
          onBulkArchive={handleBulkArchive}
          onBulkDelete={handleBulkDelete}
          onBulkMarkAsRead={handleBulkMarkAsRead}
          onContextMenu={handleOpenContextMenu}
          onArchive={handleArchiveThread}
          onDelete={handleDeleteThread}
          onMarkAsRead={handleMarkAsReadThread}
          onToggleStar={handleToggleStarThread}
          onOpenKebabMenu={handleOpenKebabMenu}
        />
      </div>
      <Resizer onMouseDown={handleListMouseDown} />
      <div className="flex-1 flex flex-col min-w-0">
        <EmailDetailHeader
          thread={selectedThread}
          onToggleAIAssistant={toggleAIAssistant}
          onBack={handleBack}
          isDetailView={!!selectedThreadId}
          onDiscoverClick={() => setIsDiscoverModalOpen(true)}
          onScheduleMeetingClick={handleScheduleMeeting}
          onSnoozeClick={(e) => selectedThread && handleOpenSnooze(selectedThread.id, e.currentTarget)}
          onOpenKebabMenu={handleOpenKebabMenu}
          onUnsnooze={handleUnsnoozeThread}
          onSummarize={handleSummarizeThread}
          isSummarizing={threadSummary.isLoading}
          onComposeInteraction={(type) => selectedThread && handleComposeInteraction(selectedThread, type)}
          onToggleStar={() => selectedThread && handleToggleStarThread(selectedThread.id)}
          searchQuery={searchQuery}
          onSearchQueryChange={onSearchQueryChange}
          onOpenSearchFilters={(el) => onOpenSearchFilters(el)}
          areFiltersActive={areFiltersActive}
        />
        <div className="flex-1 flex min-h-0 relative">
          <EmailDetail
            thread={selectedThread}
            summaryState={threadSummary}
            onClearSummary={() => setThreadSummary({ threadId: null, summary: null, isLoading: false, error: null })}
            onComposeInteraction={(type, msg) => selectedThread && handleComposeInteraction(selectedThread, type, msg)}
            onToggleStar={() => selectedThread && handleToggleStarThread(selectedThread.id)}
          />
          {isAIAssistantOpen && (
            <div className="absolute top-0 right-0 h-full w-[400px] p-4 pl-0">
                <AIAssistant 
                    selectedThread={selectedThread} 
                    onClose={handleCloseAIAssistant}
                    mode={aiAssistantMode}
                />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailView;