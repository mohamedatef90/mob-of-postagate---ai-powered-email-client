import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { ToggleSwitch } from './ui/ToggleSwitch';

// --- Type Definitions ---
type Theme = 'light' | 'dark' | 'system';

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


const ContentPage: React.FC<{ title: string; subtitle?: string; headerActions?: React.ReactNode; children: React.ReactNode }> = ({ title, subtitle, headerActions, children }) => (
    <div className="flex flex-col h-full">
        <header className="p-6 lg:p-8 flex-shrink-0 border-b border-border">
            <div className="flex items-center justify-between">
                 <div className="flex items-center min-w-0">
                    <div className="min-w-0">
                        <h2 className="text-2xl font-bold text-foreground truncate">{title}</h2>
                        {subtitle && <p className="text-sm text-muted-foreground truncate">{subtitle}</p>}
                    </div>
                </div>
                {headerActions && <div className="flex-shrink-0 ml-4">{headerActions}</div>}
            </div>
        </header>
        <div className="flex-1 overflow-auto p-6 lg:p-8">
            {children}
        </div>
    </div>
);

// --- Individual Settings Pages ---

const AddAccountPage: React.FC = () => {
    const providers = [
        { name: 'Google', icon: 'fa-brands fa-google' },
        { name: 'Zoho', icon: 'fa-solid fa-z' },
        { name: 'Exchange', icon: 'fa-solid fa-briefcase' },
        { name: 'Office365', icon: 'fa-brands fa-windows' },
        { name: 'Other', icon: 'fa-regular fa-envelope' },
    ];
    return (
        <ContentPage title="Add New Account">
            <SettingsSection title="Quick Provider Setup">
                <div className="grid grid-cols-5 gap-4">
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
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="show-password" />
                        <label htmlFor="show-password">Show Password</label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" id="set-default" />
                        <label htmlFor="set-default">Set as Default Email</label>
                    </div>
                    <Button className="w-full">Add Account</Button>
                 </div>
            </SettingsSection>
        </ContentPage>
    );
};

const ManageAccountPage: React.FC<{ accountEmail: string; }> = ({ accountEmail }) => {
    const [toggles, setToggles] = useState({ syncEmails: true, syncCalendars: false, syncTasks: true, syncContacts: false, autoCc: false, showImages: true, autoDownload: false });
    const [isSignatureEnabled, setIsSignatureEnabled] = useState(true);
    const [signature, setSignature] = useState('Best regards,\n\nHarry Potter');
    const [editingSignature, setEditingSignature] = useState(signature);

    useEffect(() => {
        if (isSignatureEnabled) {
            setEditingSignature(signature);
        }
    }, [isSignatureEnabled]);

    const handleSaveSignature = () => {
        setSignature(editingSignature);
        if (!editingSignature.trim()) {
            setIsSignatureEnabled(false);
        }
    };

    const handleCancelEditingSignature = () => {
        setEditingSignature(signature);
    };
    
    const headerActions = (
         <Button variant="destructive" size="sm">Remove Account</Button>
    );
    
    return (
        <ContentPage title="Manage Account" subtitle={accountEmail} headerActions={headerActions}>
            <SettingsSection title="Sync Settings">
                <SettingsItem label="Sync Emails"><ToggleSwitch checked={toggles.syncEmails} onChange={v => setToggles(s => ({...s, syncEmails: v}))} /></SettingsItem>
                <SettingsItem label="Sync Calendars"><ToggleSwitch checked={toggles.syncCalendars} onChange={v => setToggles(s => ({...s, syncCalendars: v}))} /></SettingsItem>
                <SettingsItem label="Sync Tasks"><ToggleSwitch checked={toggles.syncTasks} onChange={v => setToggles(s => ({...s, syncTasks: v}))} /></SettingsItem>
                <SettingsItem label="Sync Contacts"><ToggleSwitch checked={toggles.syncContacts} onChange={v => setToggles(s => ({...s, syncContacts: v}))} /></SettingsItem>
                <SettingsItem label="Email Sync Schedule"><Select><option>Push</option><option>Manually</option><option>Every 15 minutes</option></Select></SettingsItem>
                <SettingsItem label="Roaming Schedule"><Select><option>Manually</option><option>Every hour</option></Select></SettingsItem>
                <SettingsItem label="Peak Schedule" description="Active during work hours."><Select><option>As primary</option><option>Push</option></Select></SettingsItem>
                <SettingsItem label="Folder Sync Selection" description="Choose which folders to sync." />
                <SettingsItem label="Email Sync Period"><Select><option>1 week</option><option>1 month</option><option>All time</option></Select></SettingsItem>
            </SettingsSection>

            <SettingsSection title="Account Identity & Behavior">
                <SettingsItem label="Account Name and Color" description="Set a custom display name and color." />
                <SettingsItem label="Automatic Cc/Bcc"><ToggleSwitch checked={toggles.autoCc} onChange={v => setToggles(s => ({...s, autoCc: v}))} /></SettingsItem>
                <SettingsItem label="Email Signature" description="Enable and edit a custom signature.">
                    <ToggleSwitch checked={isSignatureEnabled} onChange={setIsSignatureEnabled} />
                </SettingsItem>
                {isSignatureEnabled && (
                     <div className="py-4 border-b border-border animate-fadeInUp" style={{ animationDuration: '0.3s' }}>
                        <div className="pl-8 pr-4">
                            <div className="border border-input rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                                <div className="p-2 border-b border-input bg-secondary flex items-center space-x-1">
                                    <Button variant="ghost" size="icon" className="h-8 w-8" title="Bold"><i className="fa-solid fa-bold w-4 h-4"></i></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8" title="Italic"><i className="fa-solid fa-italic w-4 h-4"></i></Button>
                                    <Button variant="ghost" size="icon" className="h-8 w-8" title="Underline"><i className="fa-solid fa-underline w-4 h-4"></i></Button>
                                </div>
                                <textarea
                                    value={editingSignature}
                                    onChange={(e) => setEditingSignature(e.target.value)}
                                    className="w-full h-32 p-3 bg-transparent text-sm focus:outline-none resize-y placeholder:text-muted-foreground no-scrollbar"
                                    placeholder="Your signature here..."
                                />
                            </div>
                            <div className="flex justify-end space-x-2 mt-3">
                                <Button variant="secondary" onClick={handleCancelEditingSignature}>Cancel</Button>
                                <Button onClick={handleSaveSignature}>Save Signature</Button>
                            </div>
                        </div>
                    </div>
                )}
                <SettingsItem label="Image Loading Control"><ToggleSwitch checked={toggles.showImages} onChange={v => setToggles(s => ({...s, showImages: v}))} /></SettingsItem>
                <SettingsItem label="Automatic Attachment Download"><ToggleSwitch checked={toggles.autoDownload} onChange={v => setToggles(s => ({...s, autoDownload: v}))} /></SettingsItem>
                <SettingsItem label="Out of Office Reply" />
                <SettingsItem label="Empty Recycle Bin" />
            </SettingsSection>
        </ContentPage>
    );
};

const AccountsPage: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => (
    <ContentPage title="Accounts">
        <SettingsSection title="Manage Accounts">
            <div className="bg-secondary rounded-lg p-4 flex justify-between items-center">
                <div>
                    <p className="font-semibold text-foreground">motion90m@hogwarts.uk.edu</p>
                    <p className="text-sm text-muted-foreground">Gmail</p>
                </div>
                <button onClick={() => onNavigate('manage-account')} className="text-sm font-semibold text-primary hover:underline">Manage &rarr;</button>
            </div>
        </SettingsSection>
        <SettingsSection title="Add Account">
            <Button onClick={() => onNavigate('add-account')} className="w-full h-11">Add New Account</Button>
        </SettingsSection>
    </ContentPage>
);


const GeneralSettingsPage: React.FC<{ theme: Theme, setTheme: (theme: Theme) => void }> = ({ theme, setTheme }) => {
    const [toggles, setToggles] = useState({ showAvatars: true, autoFit: true, smartNotifications: false, sentSound: true });
    return (
        <ContentPage title="General Settings">
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
                <SettingsItem label="App Icon"><Select><option>Default</option><option>Dark</option><option>Classic</option></Select></SettingsItem>
                <SettingsItem label="Show Avatars"><ToggleSwitch checked={toggles.showAvatars} onChange={v => setToggles(s => ({...s, showAvatars: v}))} /></SettingsItem>
                <SettingsItem label="Preview Lines"><Select><option>1 line</option><option>2 lines</option><option>3 lines</option></Select></SettingsItem>
                <SettingsItem label="Auto Fit Content"><ToggleSwitch checked={toggles.autoFit} onChange={v => setToggles(s => ({...s, autoFit: v}))} /></SettingsItem>
            </SettingsSection>
            <SettingsSection title="Notifications">
                <SettingsItem label="Notification Actions" description="Customize up to 3 actions." />
                <SettingsItem label="Smart Notifications"><ToggleSwitch checked={toggles.smartNotifications} onChange={v => setToggles(s => ({...s, smartNotifications: v}))} /></SettingsItem>
                <SettingsItem label="Sent Sound"><ToggleSwitch checked={toggles.sentSound} onChange={v => setToggles(s => ({...s, sentSound: v}))} /></SettingsItem>
            </SettingsSection>
        </ContentPage>
    );
}

const AdvancedSettingsPage: React.FC = () => {
    const [toggles, setToggles] = useState({ protectApp: true, biometrics: true, loadRemote: false, analytics: true, chatAssistant: true, copilotInbox: false, compose: true, summarize: true });
    return (
        <ContentPage title="Advanced Settings">
            <SettingsSection title="Security">
                <SettingsItem label="Protect App Access"><ToggleSwitch checked={toggles.protectApp} onChange={v => setToggles(s => ({...s, protectApp: v}))} /></SettingsItem>
                <SettingsItem label="Use Biometrics"><ToggleSwitch checked={toggles.biometrics} onChange={v => setToggles(s => ({...s, biometrics: v}))} /></SettingsItem>
                <SettingsItem label="Check Frequency"><Select><option>Always</option><option>After 15 minutes</option></Select></SettingsItem>
                <SettingsItem label="Load Remote Content"><ToggleSwitch checked={toggles.loadRemote} onChange={v => setToggles(s => ({...s, loadRemote: v}))} /></SettingsItem>
                <SettingsItem label="Analytics"><ToggleSwitch checked={toggles.analytics} onChange={v => setToggles(s => ({...s, analytics: v}))} /></SettingsItem>
            </SettingsSection>
            <SettingsSection title="Copilot (AI Features)">
                <SettingsItem label="Monthly Quota" description="Visual meter showing AI usage" />
                <SettingsItem label="Chat Assistant"><ToggleSwitch checked={toggles.chatAssistant} onChange={v => setToggles(s => ({...s, chatAssistant: v}))} /></SettingsItem>
                <SettingsItem label="Copilot for Inbox"><ToggleSwitch checked={toggles.copilotInbox} onChange={v => setToggles(s => ({...s, copilotInbox: v}))} /></SettingsItem>
                <SettingsItem label="Compose & Reply"><ToggleSwitch checked={toggles.compose} onChange={v => setToggles(s => ({...s, compose: v}))} /></SettingsItem>
                <SettingsItem label="Summarize Emails"><ToggleSwitch checked={toggles.summarize} onChange={v => setToggles(s => ({...s, summarize: v}))} /></SettingsItem>
            </SettingsSection>
        </ContentPage>
    )
}

const SupportPage: React.FC = () => (
    <ContentPage title="Support">
        <SettingsSection title="Help & Information">
            <SettingsItem label="Contact Us" description="FAQ, feedback, and community forums" />
            <SettingsItem label="Permissions" description="App permissions for Calendar, Contacts, etc." />
            <SettingsItem label="About" description="App version and Open Source licenses" />
            <SettingsItem label="App Progress" description="Checklist of Pro features to try" />
        </SettingsSection>
    </ContentPage>
);


const SettingsSidebarNavLink: React.FC<{ label: string; view: string; activeView: string; onNavigate: (view: string) => void; }> = ({ label, view, activeView, onNavigate }) => {
  const isActive = activeView.startsWith(view);
  return (
    <button
      onClick={() => onNavigate(view)}
      className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors duration-150 ${
        isActive
          ? 'bg-primary text-primary-foreground font-semibold'
          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
      }`}
    >
      {label}
    </button>
  );
};

const SettingsSidebarSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h2 className="px-3 pt-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{title}</h2>
        <div className="space-y-1">{children}</div>
    </div>
);


// --- Main SettingsView Component ---
interface SettingsViewProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ theme, setTheme }) => {
  const [activePage, setActivePage] = useState('accounts');

  const handleNavigate = (page: string) => {
    setActivePage(page);
  };

  const renderContent = () => {
      if (activePage.startsWith('manage-account')) {
          return <ManageAccountPage accountEmail="motion90m@hogwarts.uk.edu" />;
      }
      if (activePage === 'add-account') {
          return <AddAccountPage />;
      }

      switch(activePage) {
          case 'accounts':
              return <AccountsPage onNavigate={handleNavigate} />;
          case 'general':
              return <GeneralSettingsPage theme={theme} setTheme={setTheme} />;
          case 'advanced':
              return <AdvancedSettingsPage />;
          case 'support':
              return <SupportPage />;
          default:
              return <AccountsPage onNavigate={handleNavigate} />;
      }
  };

  return (
    <div className="flex flex-1 min-h-0 bg-background text-foreground">
      {/* Settings Sidebar */}
      <nav className="w-64 flex-shrink-0 bg-card border-r border-border flex flex-col p-2 backdrop-blur-xl">
         <div className="px-3 pt-2 pb-4">
             <h1 className="font-semibold text-lg">Settings</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-4">
            <SettingsSidebarSection title="Preferences">
                <SettingsSidebarNavLink label="Accounts" view="accounts" activeView={activePage} onNavigate={handleNavigate} />
                <SettingsSidebarNavLink label="General Settings" view="general" activeView={activePage} onNavigate={handleNavigate} />
                <SettingsSidebarNavLink label="Advanced Settings" view="advanced" activeView={activePage} onNavigate={handleNavigate} />
                <SettingsSidebarNavLink label="Support" view="support" activeView={activePage} onNavigate={handleNavigate} />
            </SettingsSidebarSection>
        </div>
      </nav>

      {/* Settings Content */}
      <main className="flex-1 min-w-0 backdrop-blur-xl block">
        {renderContent()}
      </main>
    </div>
  );
};

export default SettingsView;