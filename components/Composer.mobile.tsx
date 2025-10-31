import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import type { Thread } from '../types';

interface ComposerMobileProps {
    onClose: () => void;
    initialState?: { to?: string; subject?: string; body?: string; } | null;
    onSend: (email: { to: string, subject: string, body: string, attachments: File[] }) => void;
}

const ComposerMobile: React.FC<ComposerMobileProps> = ({ onClose, initialState, onSend }) => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [attachments, setAttachments] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const hasContent = to || subject || body || attachments.length > 0;
    
    useEffect(() => {
        if (initialState) {
            setTo(initialState.to || '');
            setSubject(initialState.subject || '');
            setBody(initialState.body || '');
        }
    }, [initialState]);

    const handleClose = () => {
        if(hasContent && !window.confirm("You have an unsaved draft. Are you sure you want to discard it?")) {
            return;
        }
        onClose();
    };

    const handleSend = () => {
        if (!to.trim() || !subject.trim()) {
            alert("Please fill in the recipient and subject fields.");
            return;
        }
        onSend({ to, subject, body, attachments });
    };
    
    const handleAttachClick = () => {
        fileInputRef.current?.click();
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setAttachments(prev => [...prev, ...Array.from(e.target.files!)]);
        }
    };

    const removeAttachment = (index: number) => {
        setAttachments(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="h-full w-full bg-background flex flex-col animate-fadeInUp">
            <header className="p-2 flex items-center justify-between flex-shrink-0 border-b border-border">
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" onClick={handleClose} className="h-10 w-10 text-muted-foreground">
                        <i className="fa-solid fa-arrow-left w-5 h-5"></i>
                    </Button>
                    <h2 className="text-lg font-bold ml-2">New Message</h2>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" onClick={handleAttachClick} className="h-10 w-10 text-muted-foreground">
                        <i className="fa-solid fa-paperclip w-5 h-5"></i>
                    </Button>
                    <Button onClick={handleSend} disabled={!to.trim() || !subject.trim()}>Send</Button>
                </div>
            </header>
            <div className="flex-1 flex flex-col overflow-y-auto p-4">
                <div className="border-b border-border flex items-center">
                    <span className="py-2 pr-2 text-sm text-muted-foreground">To</span>
                    <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="" className="w-full py-2 bg-transparent focus:outline-none text-sm text-foreground"/>
                </div>
                <div className="border-b border-border">
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="w-full py-3 bg-transparent focus:outline-none text-sm text-foreground placeholder:text-muted-foreground"/>
                </div>
                {attachments.length > 0 && (
                    <div className="py-2 border-b border-border max-h-28 overflow-y-auto no-scrollbar">
                        {attachments.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-1.5 rounded-md my-1 bg-secondary animate-fadeIn">
                                <div className="flex items-center space-x-2 text-sm min-w-0">
                                    <i className="fa-solid fa-paperclip text-muted-foreground flex-shrink-0"></i>
                                    <span className="truncate text-secondary-foreground">{file.name}</span>
                                    <span className="text-muted-foreground text-xs flex-shrink-0">({(file.size / 1024).toFixed(1)} KB)</span>
                                </div>
                                <button onClick={() => removeAttachment(index)} className="text-muted-foreground hover:text-foreground flex-shrink-0 ml-2"><i className="fa-solid fa-xmark"></i></button>
                            </div>
                        ))}
                    </div>
                )}
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full flex-1 pt-3 bg-transparent focus:outline-none text-base resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Compose email"
                />
            </div>
             <input type="file" multiple ref={fileInputRef} onChange={handleFileChange} className="hidden" />
        </div>
    );
};

export default ComposerMobile;
