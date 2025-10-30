import React from 'react';
import type { Thread } from '../types';
import { Button } from './ui/Button';

interface EmailDetailActionBarProps {
    thread: Thread;
    onComposeInteraction: (thread: Thread, type: 'reply' | 'reply-all' | 'forward') => void;
    onArchive: (threadId: string) => void;
    onDelete: (threadId: string) => void; // Maybe use one function based on context
}

const EmailDetailActionBar: React.FC<EmailDetailActionBarProps> = ({ thread, onComposeInteraction, onArchive }) => {
    // For now, let's just use archive, can be made contextual later
    const handleArchive = () => {
        onArchive(thread.id);
    };
    
    // Mobile view
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-2 bg-background/80 border-t border-border backdrop-blur-xl animate-fadeInUp" style={{animationDuration: '0.2s'}}>
            <div className="flex justify-around items-center">
                <Button variant="ghost" className="flex-col h-auto px-2 py-1 space-y-1 text-muted-foreground" onClick={() => onComposeInteraction(thread, 'reply')}>
                    <i className="fa-solid fa-reply w-5 h-5"></i>
                    <span className="text-xs">Reply</span>
                </Button>
                 <Button variant="ghost" className="flex-col h-auto px-2 py-1 space-y-1 text-muted-foreground" onClick={() => onComposeInteraction(thread, 'reply-all')}>
                    <i className="fa-solid fa-reply-all w-5 h-5"></i>
                    <span className="text-xs">Reply All</span>
                </Button>
                <Button variant="ghost" className="flex-col h-auto px-2 py-1 space-y-1 text-muted-foreground" onClick={() => onComposeInteraction(thread, 'forward')}>
                    <i className="fa-solid fa-share w-5 h-5"></i>
                    <span className="text-xs">Forward</span>
                </Button>
                 <Button variant="ghost" className="flex-col h-auto px-2 py-1 space-y-1 text-muted-foreground" onClick={handleArchive}>
                    <i className="fa-solid fa-archive w-5 h-5"></i>
                    <span className="text-xs">Archive</span>
                </Button>
            </div>
        </div>
    );
};

export default EmailDetailActionBar;