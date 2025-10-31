import React from 'react';
import { Button } from '../ui/Button';

interface NotificationsStepProps {
    onNext: () => void;
    onBack: () => void;
}

const NotificationsStep: React.FC<NotificationsStepProps> = ({ onNext, onBack }) => {
    return (
        <div className="w-full max-w-md mx-auto flex flex-col justify-center h-full text-center">
             <header>
                <h1 className="text-3xl font-bold text-foreground">Enable Notifications?</h1>
                <p className="text-muted-foreground mt-2">Get alerts for new emails, mentions, security updates, and AI responses.</p>
            </header>
            <main className="mt-8 flex-1">
                <div className="flex flex-col items-center justify-center flex-1 h-full">
                    <i className="fa-regular fa-bell text-8xl text-primary/50"></i>
                </div>
            </main>
             <footer className="mt-8 space-y-3">
                 <Button size="lg" onClick={onNext} className="w-full rounded-full backdrop-blur-xl bg-primary/80 border border-white/20 shadow-lg">Enable Notifications</Button>
                 <Button variant="ghost" size="lg" onClick={onNext} className="w-full rounded-full">Not Now</Button>
            </footer>
        </div>
    );
};

export default NotificationsStep;
