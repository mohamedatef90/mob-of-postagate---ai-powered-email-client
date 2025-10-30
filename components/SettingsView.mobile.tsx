import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { ToggleSwitch } from './ui/ToggleSwitch';

// --- Type Definitions ---
type Theme = 'light' | 'dark' | 'system';
type View = 'main_list' | 'accounts' | 'manage-account' | 'add-account' | 'general' | 'advanced' | 'support';

// --- Reusable UI Components for Settings ---

const SettingsItem: React.FC<{ label: string; description?: string; children?: React.ReactNode; }> = ({ label, description, children }) => (
    <div className="flex justify-between items-center py-4 border-b border-border">
        <div className="pr-4">
            <h4 className="font-medium text-foreground whitespace-nowrap">{label}</h4>
            {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
        <div className="flex-shrink-0">{children}</div>
    </div>
);

const SettingsSection: React.FC<{ title: string; description?: string; children: React.ReactNode }> = ({ title, description, children }) => (
    <section className="mt-8 first:mt-0">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && <p className="text-muted-foreground text-sm mt-1">{description}</p>}
        <div className="mt-4">{children}</div>
    </section>
);


const ContentPage: React.FC<{ title: string; subtitle?: string; headerActions?: React.ReactNode; onBack: () => void; children: React.ReactNode }> = ({ title, subtitle, headerActions, onBack, children }) => (
    <div className="flex flex-col h-full animate-fadeIn">
        <header className="p-3 sm:p-4 flex-shrink-0 border-b border-border bg-background/80 backdrop-blur-lg">
            <div className="flex items-center justify-between">
                 <div className="flex items-center min-w-0">
                    <button onClick={onBack} className="mr-2 p-2 rounded-full hover:bg-accent flex-shrink-0 h-10 w-10">
                        <i className="fa-solid fa-arrow-left w-5 h-5 text-muted-foreground"></i>
                    </button>
                    <div className="min-w-0">
                        <h2 className="text-lg font-bold text-foreground truncate">{title}</h2>
                        {subtitle && <p className="text-sm text-muted-foreground truncate">{subtitle}</p>}
                    </div>
                </div>
                {headerActions && <div className="flex-shrink-0 ml-4">{headerActions}</div>}
            </div>
        </header>
        <div className="flex-1 overflow-auto p-4 sm:p-6">
            {children}
        </div>
    </div>
);

// --- Individual Settings Pages ---

const AddAccountPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const providers = [
        { name: 'Google', icon: 'fa-brands fa-google' },
        { name: 'Zoho', icon: 'fa-solid fa-z' },
        { name: 'Exchange', icon: 'fa-solid fa-briefcase' },
        { name: 'Office365', icon: 'fa-brands fa-windows' },
        { name: 'Other', icon: 'fa-regular fa-envelope' },
    ];
    return (
        <ContentPage title="Add New Account" onBack={onBack}>
            <SettingsSection title="Quick Provider Setup">
                <div className="grid grid-cols-3 gap-4">
                    {providers.map(p => (
                        <button key={p.name} className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg hover:bg-accent transition-colors space-y-2">
                            <i className={`${p.icon} text-3xl text-muted-foreground`}></i>
                            <span className="text-sm font-medium">{p.name}</span>
                        </button>
                    ))}
                </div>
            </SettingsSection>
            <SettingsSection title="Manual Sign-In">
                 <div className="space-y-4">
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Button className="w-full">Add Account</Button>
                 </div>
            </SettingsSection>
        </ContentPage>
    );
};

const ManageAccountPage: React.FC<{ accountEmail: string; onBack: () => void }> = ({ accountEmail, onBack }) => {
    const headerActions = (
         <Button variant="destructive" size="sm">Remove</Button>
    );
    
    return (
        <ContentPage title="Manage Account" subtitle={accountEmail} onBack={onBack} headerActions={headerActions}>
            <SettingsSection title="Sync Settings">
                <SettingsItem label="Sync Emails"><ToggleSwitch checked={true} onChange={() => {}} /></SettingsItem>
                <SettingsItem label="Sync Calendars"><ToggleSwitch checked={false} onChange={() => {}} /></SettingsItem>
                <SettingsItem label="Email Sync Period"><Select><option>1 month</option><option>All time</option></Select></SettingsItem>
            </SettingsSection>
             <SettingsSection title="Identity">
                <SettingsItem label="Email Signature" />
                <SettingsItem label="Out of Office Reply" />
            </SettingsSection>
        </ContentPage>
    );
};

const AccountsPage: React.FC<{ onNavigate: (view: View) => void, onBack: () => void }> = ({ onNavigate, onBack }) => (
    <ContentPage title="Accounts" onBack={onBack}>
        <SettingsSection title="Manage Accounts">
            <div className="bg-secondary rounded-lg p-4 flex justify-between items-center">
                <div>
                    <p className="font-semibold text-foreground truncate">harry.potter@hogwarts.uk.edu</p>
                    <p className="text-sm text-muted-foreground">Hogwarts Mail</p>
                </div>
                <button onClick={() => onNavigate('manage-account')} className="text-sm font-semibold text-primary hover:underline">Manage</button>
            </div>
             <div className="bg-secondary rounded-lg p-4 flex justify-between items-center mt-2">
                <div>
                    <p className="font-semibold text-foreground truncate">anfield.admin@liverpool.uk.fc</p>
                    <p className="text-sm text-muted-foreground">Liverpool FC Mail</p>
                </div>
                <button onClick={() => onNavigate('manage-account')} className="text-sm font-semibold text-primary hover:underline">Manage</button>
            </div>
        </SettingsSection>
        <SettingsSection title="Add Account">
            <Button onClick={() => onNavigate('add-account')} className="w-full h-11">Add New Account</Button>
        </SettingsSection>
    </ContentPage>
);


const GeneralSettingsPage: React.FC<{ theme: Theme, setTheme: (theme: Theme) => void, onBack: () => void }> = ({ theme, setTheme, onBack }) => {
    return (
        <ContentPage title="General" onBack={onBack}>
            <SettingsSection title="Appearance">
                <SettingsItem label="Theme">
                    <Select 
                        value={theme}
                        onChange={(e) => setTheme(e.target.value as Theme)} 
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System</option>
                    </Select>
                </SettingsItem>
                 <SettingsItem label="Show Avatars"><ToggleSwitch checked={true} onChange={() => {}} /></SettingsItem>
            </SettingsSection>
            <SettingsSection title="Notifications">
                 <SettingsItem label="Smart Notifications"><ToggleSwitch checked={false} onChange={() => {}} /></SettingsItem>
            </SettingsSection>
        </ContentPage>
    );
}

const AdvancedSettingsPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <ContentPage title="Advanced" onBack={onBack}>
        <SettingsSection title="Security">
            <SettingsItem label="Protect App Access"><ToggleSwitch checked={true} onChange={() => {}} /></SettingsItem>
        </SettingsSection>
        <SettingsSection title="Copilot (AI Features)">
            <SettingsItem label="Summarize Emails"><ToggleSwitch checked={true} onChange={() => {}} /></SettingsItem>
        </SettingsSection>
    </ContentPage>
);

const SupportPage: React.FC<{ onBack: () => void }> = ({ onBack }) => (
    <ContentPage title="Support" onBack={onBack}>
        <SettingsSection title="Help & Information">
            <SettingsItem label="Contact Us" />
            <SettingsItem label="About" />
        </SettingsSection>
    </ContentPage>
);


const SettingsListLink: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
    <button
      onClick={onClick}
      className="w-full text-left p-4 text-foreground transition-colors duration-150 border-b border-border flex justify-between items-center"
    >
      <span>{label}</span>
      <i className="fa-solid fa-chevron-right text-muted-foreground"></i>
    </button>
);


// --- Main SettingsView Component ---
interface SettingsViewProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const SettingsViewMobile: React.FC<SettingsViewProps> = ({ theme, setTheme }) => {
    const [view, setView] = useState<View>('main_list');

    const handleNavigate = (targetView: View) => {
        setView(targetView);
    };

    const handleBack = () => {
        if (['manage-account', 'add-account'].includes(view)) {
            setView('accounts');
        } else {
            setView('main_list');
        }
    };

    if (view === 'main_list') {
        return (
            <div className="w-full flex-shrink-0 bg-card flex flex-col animate-fadeIn">
                 <header className="p-4 flex-shrink-0 border-b border-border">
                    <h1 className="font-semibold text-lg">Settings</h1>
                 </header>
                <div className="flex-1 overflow-y-auto">
                    <SettingsListLink label="Accounts" onClick={() => handleNavigate('accounts')} />
                    <SettingsListLink label="General" onClick={() => handleNavigate('general')} />
                    <SettingsListLink label="Advanced" onClick={() => handleNavigate('advanced')} />
                    <SettingsListLink label="Support" onClick={() => handleNavigate('support')} />
                </div>
            </div>
        );
    }
    
    switch (view) {
        case 'accounts': return <AccountsPage onNavigate={handleNavigate} onBack={handleBack} />;
        case 'manage-account': return <ManageAccountPage accountEmail="harry.potter@hogwarts.uk.edu" onBack={handleBack} />;
        case 'add-account': return <AddAccountPage onBack={handleBack} />;
        case 'general': return <GeneralSettingsPage theme={theme} setTheme={setTheme} onBack={handleBack} />;
        case 'advanced': return <AdvancedSettingsPage onBack={handleBack} />;
        case 'support': return <SupportPage onBack={handleBack} />;
        default: return null;
    }
};

export default SettingsViewMobile;