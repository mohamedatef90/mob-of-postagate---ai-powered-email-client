import React from 'react';
import type { User } from '../types';
import { Button } from './ui/Button';

interface EmailListHeaderMobileProps {
  isBulkMode: boolean;
  selectedCount: number;
  onClearSelection: () => void;
  onBulkArchive: () => void;
  onBulkDelete: () => void;
  onBulkMarkAsRead: () => void;
  toggleEmailSidebar: () => void;
  title: string;
  currentUser: User;
}

const EmailListHeaderMobile: React.FC<EmailListHeaderMobileProps> = ({
  isBulkMode,
  selectedCount,
  onClearSelection,
  onBulkArchive,
  onBulkDelete,
  onBulkMarkAsRead,
  toggleEmailSidebar,
  title,
  currentUser
}) => {
  if (isBulkMode) {
    return (
      <div className="px-2 py-3 border-b border-border flex items-center justify-between flex-shrink-0 bg-background/80 backdrop-blur-lg animate-fadeInDown" style={{ animationDuration: '0.2s' }}>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={onClearSelection} className="h-9 w-9">
            <i className="fa-solid fa-xmark w-5 h-5"></i>
          </Button>
          <span className="font-semibold text-lg">{selectedCount}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" onClick={onBulkArchive} className="h-9 w-9" title="Archive"><i className="fa-solid fa-archive w-5 h-5"></i></Button>
          <Button variant="ghost" size="icon" onClick={onBulkDelete} className="h-9 w-9" title="Delete"><i className="fa-solid fa-trash w-5 h-5"></i></Button>
          <Button variant="ghost" size="icon" onClick={onBulkMarkAsRead} className="h-9 w-9" title="Mark as read"><i className="fa-regular fa-envelope-open w-5 h-5"></i></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-2 py-3 border-b border-border flex items-center justify-between flex-shrink-0 bg-background/80 backdrop-blur-lg">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={toggleEmailSidebar} className="h-10 w-10">
          <i className="fa-solid fa-bars w-5 h-5"></i>
        </Button>
        <h1 className="text-xl font-bold ml-2">{title}</h1>
      </div>
      <div className="flex items-center">
        <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default EmailListHeaderMobile;