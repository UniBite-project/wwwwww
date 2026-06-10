(function() {
    let myOrders = [];
    const chefPageHTML_el = `
        <div class="main-container">
            
            <div class="panel form-panel">
                <div class="panel-header">
                    <h2 class="panel-title">Δημιουργία / Επεξεργασία<br>Αγγελίας</h2>
                </div>

                <form onsubmit="event.preventDefault();">
                    <div class="form-group">
                        <label class="label">Τίτλος <span class="required-star">*</span></label>
                        <input type="text" class="input" placeholder="π.χ. Μακαρόνια με κιμά" required>
                    </div>

                    <div class="form-group">
                        <label class="label">Φωτογραφία (προαιρετικά)</label>
                        <div class="upload-box">
                            <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="17 8 12 3 7 8"/>
                                <line x1="12" y1="3" x2="12" y2="15"/>
                            </svg>
                            <div class="upload-title">Μεταφόρτωση φωτογραφίας</div>
                            <div class="upload-text">Κάνε drag & drop ή πάτησε για επιλογή</div>
                            <div class="upload-hint">PNG, JPG, GIF (max 5MB)</div>
                        </div>
                    </div>

                    <div class="row-2">
                        <div class="form-group">
                            <label class="label">Τοποθεσία <span class="required-star">*</span></label>
                            <input type="text" class="input" placeholder="π.χ. Φοιτητική Εστία" required>
                        </div>
                        <div class="form-group">
                            <label class="label">Ποσότητα (μερίδες) <span class="required-star">*</span></label>
                            <div class="counter-container">
                                <button type="button" class="counter-btn">-</button>
                                <span class="counter-value">1</span>
                                <button type="button" class="counter-btn">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="label">Διαθέσιμο έως <span class="required-star">*</span></label>
                        <div class="input-icon-wrapper">
                            <input type="time" class="input input-with-icon" required>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="label">Σημειώσεις / Περιγραφή</label>
                        <textarea class="input" placeholder="π.χ. Παραλαβή έξω από το κτίριο Γ..."></textarea>
                    </div>

                    <div class="form-group">
                        <label class="label">Αλλεργιογόνα</label>
                        <div class="allergens-grid">
                            <label class="allergen-item"><input type="checkbox" value="gluten"> Γλουτένη</label>
                            <label class="allergen-item"><input type="checkbox" value="milk"> Γαλακτοκομικά</label>
                            <label class="allergen-item"><input type="checkbox" value="eggs"> Αυγά</label>
                            <label class="allergen-item"><input type="checkbox" value="peanuts"> Ξηροί Καρποί</label>
                        </div>
                    </div>

                    <div class="form-actions">
                        <button type="button" class="btn-chef btn-clear">Καθαρισμός</button>
                        <button type="submit" class="btn-chef btn-save">Δημοσίευση</button>
                    </div>
                </form>
            </div>

            <div class="panel display-panel">
                <div class="section-block">
                    <div class="section-title-container">
                        <h3 class="panel-section-title">Οι Αγγελίες μου</h3>
                        <span class="counter-text">(2 ενεργές)</span>
                    </div>
                    
                    <div class="listing-panel">
                        <div class="listing-card">
                            <div class="listing-header">
                                <h4 class="listing-name">Παστίτσιο με πλούσια μπεσαμέλ</h4>
                                <div class="listing-actions">
                                    <button class="action-btn edit-btn" title="Επεξεργασία"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                                    <button class="action-btn delete-btn" title="Διαγραφή"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                                </div>
                            </div>
                            <div class="listing-details">
                                <span class="detail-tag tag-location">📍 Εστία Νέων</span>
                                <span class="detail-tag tag-qty">2 μερίδες</span>
                                <span class="detail-tag tag-time"> Έως 21:30</span>
                            </div>
                        </div>

                        <div class="listing-card">
                            <div class="listing-header">
                                <h4 class="listing-name">Vegan Buddha Bowl</h4>
                                <div class="listing-actions">
                                    <button class="action-btn edit-btn" title="Επεξεργασία"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
                                    <button class="action-btn delete-btn" title="Διαγραφή"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                                </div>
                            </div>
                            <div class="listing-details">
                                <span class="detail-tag tag-location">📍 Κεντρική Βιβλιοθήκη</span>
                                <span class="detail-tag tag-qty"> 1 μερίδα</span>
                                <span class="detail-tag tag-time"> Έως 20:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section-block">
                    <div class="section-title-container">
                        <h3 class="panel-section-title">Αιτήματα Φοιτητών</h3>
                        <span class="requests-badge">1 νέο</span>
                    </div>
                    
                    <div class="requests-list">
                        <div class="request-card unread">
                            <div class="request-header">
                                <div class="user-info">
                                    <div class="user-avatar">ΓΠ</div>
                                    <div>
                                        <h5 class="user-name">Γιώργος Παπαδόπουλος</h5>
                                        <span class="request-time">Πριν 5 λεπτά</span>
                                    </div>
                                </div>
                            </div>
                            <div class="request-details">
                                <div class="request-target"><span class="details-label">Αγγελία</span><span class="details-value">Vegan Buddha Bowl</span></div>
                                <div class="request-qty"><span class="details-label">Ζητημένες μερίδες</span><span class="portions-badge">1 μερίδα</span></div>
                            </div>
                            <div class="request-actions">
                                <button class="btn-req btn-accept" title="Αποδοχή"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Αποδοχή</span></button>
                                <button class="btn-req btn-reject" title="Απόρριψη"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><span>Απόρριψη</span></button>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="view-all-link">Δες όλα τα αιτήματα →</a>
                </div>
            </div>

        </div>
    `;
    // ===== ΔΕΔΟΜΕΝΑ ΣΥΝΑΔΕΛΦΟΥ (Αρχικό State) =====
window.appData = {
    listings: [
        {
            id: 1,
            title: "Παστίτσιο με πλούσια μπεσαμέλ",
            location: "Εστία Νέων",
            quantity: 2,
            time: "21:30",
            notes: "Ζεστό από το φούρνο!",
            allergens: ["gluten", "milk", "eggs"]
        },
        {
            id: 2,
            title: "Vegan Buddha Bowl",
            location: "Κεντρική Βιβλιοθήκη",
            quantity: 1,
            time: "20:00",
            notes: "Με dressing ταχίνι.",
            allergens: ["peanuts"]
        }
    ],
    requests: [
        {
            id: 100,
            listingTitle: "Vegan Buddha Bowl",
            userName: "Γιώργος Παπαδόπουλος",
            avatar: "ΓΠ",
            timeAgo: "Πριν 5 λεπτά",
            quantity: 1,
            unread: true
        }
    ]
};
    
    const translations = {
        el: {
            menu_home: "Αρχική",
            menu_chef: "Δημιουργήσε Αγγελία",
            menu_orders:"Οι Παραγγελίες μου",
            menu_bonus:"Πόντοι & Επιβραβεύσεις",
            menu_account:"Ο Λογαριασμός μου",
            menu_ads:"Οι Αγγελίες μου",
            menu_consumer_reserve: "Όλες οι Αγγελίες",
            menu_admin:"Διαχειριστής",
            menu_faq: "Συχνές Ερωτήσεις",
            menu_settings: "Ρυθμίσεις",
            welcome_prefix: "Καλώς ήρθες,",
            card_chef_title: "Μάγειρας",
            card_chef_desc: "Δημιουργία αγγελίας",
            badge_chef: "Πάροχος",
            card_consumer_title: "Όλες οι αγγελίες",
            card_consumer_desc: "Αναζήτηση φαγητού",
            badge_consumer: "Δέκτης",
            card_orders_title: "Αγγελίες",
            card_orders_desc: "Παρακολούθηση",
            badge_orders: "Ιστορικό",
            card_bonus_title: "Bonus",
            card_bonus_desc: "Πόντοι & ανταμοιβές",
            badge_bonus: "Ανταμοιβή",
            card_account_title: "Ο Λογαριασμός μου",
            card_account_desc: "Ρυθμίσεις προφίλ",
            badge_account: "Προφίλ",
            card_admin_title: "Διαχειριστής",
            card_admin_desc: "Πίνακας ελέγχου",
            badge_admin: "Admin",
            page_payments_title: "Πληρωμές & Πόντοι",
            page_payments_desc: "Πόντοι σου: <strong>5</strong><br>Δες την κίνηση των πόντων σου και τις συναλλαγές σου στην πλατφόρμα.",
            page_faq_title: "Συχνές Ερωτήσεις",
            page_faq_desc: `<div class="faq-layout-container">
                                <div class="faq-questions-column">
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>1. Πώς μπορώ να εγγραφώ στην πλατφόρμα;</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Η εγγραφή γίνεται δωρεάν. Πατήστε Σύνδεση και στη συνέχεια συμπληρώστε τα στοιχεία σας.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>2. Ποιες περιοχές καλύπτετε;</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Προς το παρόν καλύπτουμε μόνο την περιοχή της Πάτρας.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>3. Πώς μπορώ να πάρω πόντους;</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Οι νέοι χρήστες ξεκινούν με 5 πόντους. Στη συνέχεια, κερδίζετε πόντους προσφέροντας φαγητό ως Μάγειρας. Κάθε μερίδα που βαθμολογείται με 3/5 ή περισσότερο σας δίνει 2 πόντους.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>4. Μπορώ να αξιολογήσω ένα γεύμα;</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Ναι! Μετά την επιτυχή παραλαβή του φαγητού, μπορείτε να αφήσετε βαθμολογία 1-5 αστέρων. Αν δεν αξιολογήσετε εντός 48 ωρών, θα χάσετε 1 πόντο.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>5. Μπορώ να δω τις αγγελίες σε χάρτη;</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Ναι! Στην Αρχική σελίδα, οι αγγελίες εμφανίζονται τόσο σε λίστα όσο και σε χάρτη, με βάση το σημείο παραλαβής που έχει δηλώσει ο Μάγειρας.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>6. Τι γίνεται αν δεσμεύσω μια μερίδα και δεν την παραλάβω;</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Αν δεν παραλάβετε μια μερίδα που δεσμεύσατε, ο Μάγειρας θα το επισημάνει στο σύστημα και θα χάσετε 1 πόντο.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>7. Πόσο καιρό παραμένει ενεργή μια αγγελία;</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Κάθε αγγελία είναι ενεργή για 48 ώρες από τη στιγμή της δημοσίευσής της. Μετά από αυτό το διάστημα, διαγράφεται αυτόματα.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>8. Πώς μπορώ να δω τον Top Donor της πλατφόρμας σας ώστε να γίνω;</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Ο Διαχειριστής έχει πρόσβαση σε ειδική ενότητα Leaderboard που δείχνει τον "Top Donor" - τον φοιτητή που έχει προσφέρει τις περισσότερες μερίδες στην κοινότητα.
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-image-column">
                                    <img src="images/faq.png" alt="FAQ Illustration" class="faq-side-image">
                                </div>
                            </div>`,
            page_settings_title: "Ρυθμίσεις",
            page_settings_desc: `<div class="settings-modern-container">
                                    <div class="settings-card">
                                        <div class="settings-card-header">
                                            <span class="settings-icon"></span>
                                            <h3>Προτιμήσεις Εφαρμογής</h3>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Γλώσσα Διεπαφής (Interface Language)</span>
                                                <span class="settings-sublabel">Επιλέξτε τη βασική γλώσσα εμφάνισης του ακαδημαϊκού portal.</span>
                                            </div>
                                            <div class="settings-action">
                                                <select class="settings-select" onchange="alert('Η γλώσσα άλλαξε επιτυχώς!');">
                                                    <option value="el" selected>🇬🇷 Ελληνικά (Greek)</option>
                                                    <option value="en">🇬🇧 English (Αγγλικά)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Σκοτεινή Λειτουργία (Dark Mode)</span>
                                                <span class="settings-sublabel">Προσαρμογή των χρωμάτων για ξεκούραστη ανάγνωση το βράδυ.</span>
                                            </div>
                                            <div class="settings-action">
                                                <label class="settings-switch">
                                                   <input id="darkModeToggle" type="checkbox" onchange="toggleDarkMode()">
                                                    <span class="settings-slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="settings-card">
                                        <div class="settings-card-header">
                                            <span class="settings-icon"></span>
                                            <h3>Ειδοποιήσεις & Ασφάλεια</h3>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Push Ειδοποιήσεις για Νέες Αγγελίες</span>
                                                <span class="settings-sublabel">Λάβετε ειδοποίηση μόλις ένας φοιτητής ανεβάσει μερίδα φαγητού στο τμήμα σας.</span>
                                            </div>
                                            <div class="settings-action">
                                                <label class="settings-switch">
                                                    <input type="checkbox" checked>
                                                    <span class="settings-slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Υπενθυμίσεις Αξιολόγησης Γεύματος</span>
                                                <span class="settings-sublabel">Ειδοποίηση για βαθμολόγηση εντός 48 ωρών, προς αποφυγή ποινής πόντων.</span>
                                            </div>
                                            <div class="settings-action">
                                                <label class="settings-switch">
                                                    <input type="checkbox" checked>
                                                    <span class="settings-slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Ειδοποιήσεις Email</span>
                                                <span class="settings-sublabel">Λήψη εβδομαδιαίων στατιστικών και ανακοινώσεων της κοινότητας UniBite.</span>
                                            </div>
                                            <div class="settings-action">
                                                <label class="settings-switch">
                                                    <input type="checkbox">
                                                    <span class="settings-slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="settings-card card-info-version">
                                        <div class="settings-row no-border">
                                            <div class="settings-info">
                                                <span class="settings-label">UniBite Academic Portal — Έκδοση v2.4</span>
                                                <span class="settings-sublabel">Αναπτύχθηκε στα πλαίσια της εργασίας εξαμήνου. Όλα τα δικαιώματα διατηρούνται © 2026.</span>
                                            </div>
                                        </div>
                                    </div>
                                 </div>`,
            page_chef_title: "Δημιούργησε Αγγελία",
            page_chef_desc: `<div style="padding:20px; text-align:center;"><h3>Ενότητα Μάγειρα</h3><p>Δημιουργία και διαχείριση των αγγελιών σας.</p></div>`,
            page_consumer_reserve_title: "Δέσμευση μερίδων",
            page_consumer_reserve_desc: `<div class="consumer-container">
                                    <div class="consumer-section">
                                        <h2 class="section-title">Ενεργές Παραγγελίες</h2>
                                        <div class="listings-container" id="activeListings">
                                            <div class="listing-card">
                                                <img class="food-image" src="images/kimas.jpg" alt="Μακαρόνια με κιμά" onclick="showImage('images/kimas.jpg')">
                                                <div class="listing-info">
                                                    <h3>Μακαρόνια με κιμά</h3>
                                                    <p>Τμήμα Μηχανικών Ηλεκτρονικών Υπολογιστών & Πληροφορικής, Κτίριο Β</p>
                                                    <p>Παραλαβή: 14:00 - 15:00</p>
                                                    <p>Διαθέσιμες μερίδες: 3</p>
                                                    <p>Αλλεργιογόνα: Γλουτένη</p>
                                                    <div class="listing-actions">
                                                        <button class="request-btn" onclick="window.requestMeal(1)">Δέσμευση μερίδας</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listing-card">
                                                <img class="food-image" src="images/fasolakia.jpg" alt="Φασολάκια με πατάτες" onclick="showImage('images/fasolakia.jpg')">
                                                <div class="listing-info">
                                                    <h3>Φασολάκια με πατάτες</h3>
                                                    <p>Εστία, Δωμάτιο 105</p>
                                                    <p>Παραλαβή: 13:00 - 14:00</p>
                                                    <p>Διαθέσιμες μερίδες: 2</p>
                                                    <p>Αλλεργιογόνα: Κανένα</p>
                                                    <div class="listing-actions">
                                                        <button class="request-btn" onclick="window.requestMeal(2)">Δέσμευση μερίδας</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="consumer-section">
                                        <h2 class="section-title">Εξαντλημένες Παραγγελίες</h2>
                                        <div class="listings-container" id="expiredListings">
                                            <div class="listing-card inactive">
                                                <img class="food-image" src="images/psari.jpg" alt="Ψάρι στον φουρνο" onclick="showImage('images/psari.jpg')">
                                                <div class="listing-info">
                                                    <h3>Ψάρι στον φουρνο</h3>
                                                    <p>Κτίριο Διοίκησης, Ισόγειο</p>
                                                    <p>Παραλαβή: 12:00 - 13:00</p>
                                                    <p>Διαθέσιμες μερίδες: 0</p>
                                                    <p>Αλλεργιογόνα: Κανένα</p>
                                                    <div class="listing-actions">
                                                        <button class="request-btn" disabled style="opacity:0.5;">Μη διαθέσιμο</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listing-card inactive">
                                                <img class="food-image" src="images/mpiftekia.jpg" alt="Μπιφτέκια με πατάτες φούρνου" onclick="showImage('images/mpiftekia.jpg')">
                                                <div class="listing-info">
                                                    <h3>Μπιφτέκια με πατάτες φούρνου</h3>
                                                    <p>Φοιτητική Εστία, Δωμάτιο 52</p>
                                                    <p>Παραλαβή: 15:00 - 15:10</p>
                                                    <p>Διαθέσιμες μερίδες: 0</p>
                                                    <p>Αλλεργιογόνα: Αυγά</p>
                                                    <div class="listing-actions">
                                                        <button class="request-btn" disabled style="opacity:0.5;">Μη διαθέσιμο</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="consumer-section">
                                        <h2 class="section-title">Προσφερόμενες Μερίδες</h2>
                                        <div id="map" style="height: 400px; width: 100%; border-radius: 12px;"></div>
                                    </div>
                                </div>`,
            page_myorders_title: "Οι Παραγγελίες σου",
            page_myorders_desc: `
                                <div class="orders-page-layout">
                                    
                                    <div class="orders-sub-group active-group">
                                        <div class="orders-group-title">
                                            ΕΝΕΡΓΕΣ ΠΑΡΑΓΓΕΛΙΕΣ
                                        </div>
                                        <div id="activeOrders"></div>
                                    </div>

                                    <div class="orders-sub-group completed-group">
                                        <div class="orders-group-title">
                                            ΠΑΛΑΙΟΤΕΡΕΣ ΠΑΡΑΓΓΕΛΙΕΣ
                                        </div>
                                        <div id="completedOrders"></div>
                                    </div>

                                </div>
                                `,
            page_bonus_title: "Bonus & Πόντοι",
            page_bonus_desc: "Κέρδισε πόντους μαγειρεύοντας και μοιράζοντας φαγητό!<br>Εξαργύρωσέ τους για ανταμοιβές ή δωρεάν γεύματα.",
            page_account_title: "Ο Λογαριασμός μου",
            page_account_desc: `
                                <div class="academic-profile-wrapper">
                                    <div class="academic-grid-top">
                                        <!-- Αριστερή Κάρτα: Avatar & Στατιστικά -->
                                        <div class="academic-card card-avatar-accent">
                                            <div class="academic-card-avatar-zone">
                                                <div class="academic-avatar-wrapper">
                                                    <div class="academic-avatar-letter" id="profileAvatarLetter">U</div>
                                                    <div class="academic-verified-badge">✓</div>
                                                </div>
                                                <h3 class="academic-profile-name" id="profileNameDisplay">Χρήστης</h3>
                                                <p class="academic-profile-sub" id="profileRoleSub">Φοιτητής UniBite</p>
                                                <span class="academic-role-badge">Verified Academic Member</span>
                                                
                                                <div class="academic-user-stats">
                                                    <div class="stat-box">
                                                        <span class="stat-number">5</span>
                                                        <span class="stat-label">Πόντοι</span>
                                                    </div>
                                                    <div class="stat-box">
                                                        <span class="stat-number">12</span>
                                                        <span class="stat-label">Προσφορές</span>
                                                    </div>
                                                    <div class="stat-box">
                                                        <span class="stat-number">8</span>
                                                        <span class="stat-label">Λήψεις</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Δεξιά Κάρτα: Πίνακας Στοιχείων -->
                                        <div class="academic-card card-info-accent">
                                            <h3 class="academic-card-title">Ακαδημαϊκά Στοιχεία</h3>
                                            <table class="academic-table">
                                                <tr>
                                                    <td class="academic-label">Όνομα Χρήστη</td>
                                                    <td class="academic-value" id="profileUsername">xristos</td>
                                                </tr>
                                                <tr>
                                                    <td class="academic-label">Ιδρυματικό E-mail</td>
                                                    <td class="academic-value">up1112136@upnet.gr</td>
                                                </tr>
                                                <tr>
                                                    <td class="academic-label">Αριθμός Μητρώου</td>
                                                    <td class="academic-value">1112136</td>
                                                </tr>
                                                <tr>
                                                    <td class="academic-label">Τμήμα / Σχολή</td>
                                                    <td class="academic-value">Μηχανικών Ηλεκτρονικών Υπολογιστών & Πληροφορικής</td>
                                                </tr>
                                                <tr>
                                                    <td class="academic-label">Ημερομηνία Εγγραφής</td>
                                                    <td class="academic-value">05/06/2026</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>

                                    <!-- Κάτω Κάρτα: Διαγραφή Λογαριασμού -->
                                    <div class="academic-card-full">
                                        <h3 style="color: #dc2626; font-size: 18px; margin-bottom: 10px;">Επικίνδυνη Ζώνη</h3>
                                        <p class="delete-warning-text">Για να διαγραφείτε οριστικά από την πλατφόρμα UniBite, παρακαλούμε πατήστε το παρακάτω κουμπί. Η ενέργεια αυτή είναι μη αναστρέψιμη.</p>
                                        <button class="academic-btn-delete" onclick="alert('Το αίτημα διαγραφής στάλθηκε!');">Διαγραφή λογαριασμού</button>
                                    </div>
                                </div>`,
            page_account_desc_prefix: "",
            page_account_desc_suffix: "",
            page_account_role_student: "Φοιτητής",
            page_account_role_admin: "Διαχειριστής",
            profile_user_info: "Στοιχεία χρήστη",
            profile_personal_info: "Προσωπικά στοιχεία",
            profile_rights: "Δικαιώματα",
            profile_email: "E-mail",
            profile_student_id: "Αριθμός μητρώου",
            profile_category: "Κατηγορία",
            profile_member_since: "Μέλος από",
            profile_delete_account: "Διαγραφή λογαριασμού",
            profile_delete_warning: "Για να διαγραφείτε από την πλατφόρμα, πρέπει να κάνετε Διαγραφή Λογαριασμού πατώντας το κουμπί παρακάτω.",
            profile_delete_button: "Διαγραφή λογαριασμού",
            profile_points: "Πόντοι",
            profile_meals_offered: "Μερίδες πρόσφερες",
            profile_meals_received: "Μερίδες παρέλαβες",
            page_admin_title: "Πίνακας Διαχειριστή",
            page_admin_desc: "Καλώς ήρθες στον πίνακα ελέγχου του διαχειριστή!<br>Εδώ μπορείς να δεις στατιστικά, να διαχειριστείς χρήστες και να επιβλέπεις την πλατφόρμα.<br><br>Συνολικές μερίδες: <strong>127</strong><br>Top Donor: <strong>Μαρία Π.</strong><br>Κορυφαίο γεύμα: <strong>Μουσακάς (4.8/5)</strong>",
            page_default_title: "UniBite",
            page_default_desc: "Επέλεξε μια επιλογή από το μενού ή από τα κουτάκια",
            popup_order_accepted: "Η παραγγελία σου στάλθηκε στον μάγειρα και έγινε αποδεκτή.",
            popup_not_enough_points: "Δεν διαθέτεις αρκετούς πόντους για να δεσμεύσεις μερίδα.",
            popup_ok: "OK",
        },
        en: {
            menu_home: "Home",
            menu_chef: "Chef",
            menu_orders: "My Orders",
            menu_bonus: "Points & Rewards",
            menu_account: "My Account",
            menu_ads: "Ads",
            menu_consumer_reserve: "Portion Reservation",
            menu_admin: "Admin",
            menu_payments: "Payments",
            menu_faq: "FAQ",
            menu_settings: "Settings",
            menu_back: "Back",
            welcome_prefix: "Welcome,",
            sub_message: "Choose an option from the menu or one of the cards below",
            card_chef_title: "Chef",
            card_chef_desc: "Create listing",
            badge_chef: "Provider",
            card_consumer_title: "Portion Reservation",
            card_consumer_desc: "Search for food",
            badge_consumer: "Receiver",
            card_orders_title: "My Orders",
            card_orders_desc: "Track orders",
            badge_orders: "History",
            card_bonus_title: "Bonus",
            card_bonus_desc: "Points & rewards",
            badge_bonus: "Reward",
            card_account_title: "My Account",
            card_account_desc: "Profile settings",
            badge_account: "Profile",
            card_admin_title: "Admin",
            card_admin_desc: "Dashboard",
            badge_admin: "Admin",
            page_home_title: "Home",
            page_home_desc: "Welcome to UniBite platform!<br>Here you will find all available food listings from your fellow students.",
            page_orders_title: "Orders",
            page_orders_desc: "Here you can see your orders and their status.<br>See which meals you've requested and their progress.",
            page_payments_title: "Payments & Points",
            page_payments_desc: "Your points: <strong>5</strong><br>View your point history and transactions on the platform.",
            page_faq_title: "Frequently Asked Questions (FAQ)",
            page_faq_desc: `<div class="faq-layout-container">
                                <div class="faq-questions-column">
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>1. How can I register on the platform?</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Registration is completely free. Click "Login" and then fill in your credentials.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>2. Which areas do you cover?</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Currently, we only cover the area of Patras.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>3. How can I earn points?</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            New users start with 5 points. After that, you earn points by sharing food as a Cook. Each portion rated 3/5 stars or higher rewards you with 2 points.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>4. Can I rate a meal?</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Yes! After successfully receiving your food, you can leave a 1-5 star rating. If you do not rate within 48 hours, you will lose 1 point.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>5. Can I see the listings on a map?</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Yes! On the Home page, listings are displayed both in a list and on a map, based on the pick-up location specified by the Cook.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>6. What happens if I reserve a portion and do not pick it up?</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            If you fail to pick up a reserved portion, the Cook will report it in the system, and you will lose 1 point.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>7. How long does a listing remain active?</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            Each listing remains active for 48 hours from its publication time. After this period, it is automatically deleted.
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <div class="faq-question" onclick="toggleFAQ(this)">
                                            <span>8. How can I see the platform's Top Donor or become one?</span>
                                            <span class="faq-arrow">▼</span>
                                        </div>
                                        <div class="faq-answer">
                                            The Admin has access to a special Leaderboard section that showcases the "Top Donor" - the student who has provided the most food portions to the community.
                                        </div>
                                    </div>
                                </div>
                                <div class="faq-image-column">
                                    <img src="images/faq.png" alt="FAQ Illustration" class="faq-side-image">
                                </div>
                            </div>`,
            page_settings_title: "Settings",
            page_settings_desc: `<div class="settings-modern-container">
                                    <p class="settings-intro">Configure UniBite's personal preferences for a better browsing experience.</p>
                                    <div class="settings-card">
                                        <div class="settings-card-header">
                                            <span class="settings-icon"></span>
                                            <h3>Application Preferences</h3>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Interface Language</span>
                                                <span class="settings-sublabel">Select the primary display language of the academic portal.</span>
                                            </div>
                                            <div class="settings-action">
                                                <select class="settings-select" onchange="alert('Language changed successfully!');">
                                                    <option value="el">🇬🇷 Ελληνικά (Greek)</option>
                                                    <option value="en" selected>🇬🇧 English</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Dark Mode</span>
                                                <span class="settings-sublabel">Adjust colors for comfortable viewing in low light.</span>
                                            </div>
                                            <div class="settings-action">
                                                <label class="settings-switch">
                                                    <input type="checkbox" onchange="alert('Dark mode will be available soon!');">
                                                    <span class="settings-slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="settings-card">
                                        <div class="settings-card-header">
                                            <span class="settings-icon"></span>
                                            <h3>Notifications & Security</h3>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Push Notifications for New Ads</span>
                                                <span class="settings-sublabel">Get notified as soon as a student uploads a food portion in your department.</span>
                                            </div>
                                            <div class="settings-action">
                                                <label class="settings-switch">
                                                    <input type="checkbox" checked>
                                                    <span class="settings-slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Meal Rating Reminders</span>
                                                <span class="settings-sublabel">Get notified to rate meals within 48 hours to avoid point penalties.</span>
                                            </div>
                                            <div class="settings-action">
                                                <label class="settings-switch">
                                                    <input type="checkbox" checked>
                                                    <span class="settings-slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="settings-row">
                                            <div class="settings-info">
                                                <span class="settings-label">Email Notifications</span>
                                                <span class="settings-sublabel">Receive weekly statistics and announcements from the UniBite community.</span>
                                            </div>
                                            <div class="settings-action">
                                                <label class="settings-switch">
                                                    <input type="checkbox">
                                                    <span class="settings-slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="settings-card card-info-version">
                                        <div class="settings-row no-border">
                                            <div class="settings-info">
                                                <span class="settings-label">UniBite Academic Portal — Version v2.4</span>
                                                <span class="settings-sublabel">Developed as part of the semester project. All rights reserved © 2026.</span>
                                            </div>
                                        </div>
                                    </div>
                                 </div>`,
            page_chef_title: "Chef",
            page_chef_desc: `<div style="padding:20px; text-align:center;"><h3>Chef Dashboard</h3><p>Create and manage your food listings.</p></div>`,
            page_consumer_reserve_title: "Consumer",
            page_consumer_reserve_desc: `<div class="consumer-container">
                                    <div class="consumer-section">
                                        <h2 class="section-title">Active Orders</h2>
                                        <div class="listings-container" id="activeListings">
                                            <div class="listing-card">
                                                <img class="food-image" src="images/kimas.jpg" alt="Pasta with minced meat" onclick="showImage('images/kimas.jpg')">
                                                <div class="listing-info">
                                                    <h3>Pasta with minced meat</h3>
                                                    <p>Department of Computer Engineering & Informatics, Building B</p>
                                                    <p>Pickup: 14:00 - 15:00</p>
                                                    <p>Available portions: 3</p>
                                                    <p>Allergens: Gluten</p>
                                                    <div class="listing-actions">
                                                        <button class="request-btn" onclick="window.requestMeal(1)">Reserve portion</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listing-card">
                                                <img class="food-image" src="images/fasolakia.jpg" alt="Green beans with potatoes" onclick="showImage('images/fasolakia.jpg')">
                                                <div class="listing-info">
                                                    <h3>Green beans with potatoes</h3>
                                                    <p>Dormitory, Room 105</p>
                                                    <p>Pickup: 13:00 - 14:00</p>
                                                    <p>Available portions: 2</p>
                                                    <p>Allergens: None</p>
                                                    <div class="listing-actions">
                                                        <button class="request-btn" onclick="window.requestMeal(2)">Reserve portion</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="consumer-section">
                                        <h2 class="section-title">Expired Orders</h2>
                                        <div class="listings-container" id="expiredListings">
                                            <div class="listing-card inactive">
                                                <img class="food-image" src="images/psari.jpg" alt="Fish" onclick="showImage('images/psari.jpg')">
                                                <div class="listing-info">
                                                    <h3>Fish</h3>
                                                    <p>Administration Building, Ground Floor</p>
                                                    <p>Pickup: 12:00 - 13:00</p>
                                                    <p>Available portions: 0</p>
                                                    <p>Allergens: None</p>
                                                    <div class="listing-actions">
                                                        <button class="request-btn" disabled style="opacity:0.5;">Not available</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="listing-card inactive">
                                                <img class="food-image" src="images/mpiftekia.jpg" alt="Meatballs with oven-baked potatoes" onclick="showImage('images/mpiftekia.jpg')">
                                                <div class="listing-info">
                                                    <h3>Meatballs with oven-baked potatoes</h3>
                                                    <p>Dormitory, Room 52</p>
                                                    <p>Pickup: 15:00 - 15:10</p>
                                                    <p>Available portions: 0</p>
                                                    <p>Allergens: Eggs</p>
                                                    <div class="listing-actions">
                                                        <button class="request-btn" disabled style="opacity:0.5;">Not available</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="consumer-section">
                                        <h2 class="section-title">Offered Portions</h2>
                                        <div id="map" style="height: 400px; width: 100%; border-radius: 12px;"></div>
                                    </div>
                                </div>`,
            page_myorders_title: "My Orders",
            page_myorders_desc: `<div class="orders-container animate-fade-in">
                                    <p class="section-intro">Manage your meal reservations as a consumer or approve requests from classmates as a chef.</p>
                                    
                                    <!-- Tabs for Role Switching -->
                                    <div class="orders-tabs">
                                        <button class="tab-btn active" onclick="switchOrdersTab('consumer')">As Consumer (Received)</button>
                                        <button class="tab-btn" onclick="switchOrdersTab('chef')">As Chef (Offered)</button>
                                    </div>

                                    <!-- SECTION: AS CONSUMER -->
                                    <div id="consumer-orders" class="orders-section active-section">
                                        
                                        <!-- Category 1: ACTIVE ORDERS -->
                                        <div class="orders-sub-group">
                                            <div class="orders-group-title">ACTIVE ORDERS (TO BE PICKED UP)</div>
                                            <div class="order-card status-pending">
                                                <div class="order-header">
                                                    <span class="order-id">#UB-9482</span>
                                                    <span class="order-time-remaining">18h remaining</span>
                                                </div>
                                                <div class="order-body">
                                                    <h4>Homemade Pizza</h4>
                                                    <p class="order-meta"><strong>Chef:</strong> Nikos K. (CEID Dept)</p>
                                                    <p class="order-meta"><strong>Pickup Location:</strong> Student Residence, Building B, Room 302</p>
                                                </div>
                                                <div class="order-actions">
                                                    <button class="btn-order-outline" onclick="alert('Pickup window: 14:00 - 16:00')">Details</button>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Category 2: RECENT ORDERS -->
                                        <div class="orders-sub-group">
                                            <div class="orders-group-title">RECENT ORDERS (RATE NOW)</div>
                                            <div class="order-card status-approved">
                                                <div class="order-header">
                                                    <span class="order-id">#UB-9411</span>
                                                    <span class="order-time-remaining text-danger">7h to rate</span>
                                                </div>
                                                <div class="order-body">
                                                    <h4>Homemade Pizza</h4>
                                                    <p class="order-meta"><strong>Chef:</strong> Maria P.</p>
                                                    <div class="rating-action-block">
                                                        <label>Rate this meal (1-5 stars):</label>
                                                        <div class="stars-rating">
                                                            <span onclick="submitRating('UB-9411', 1)">⭐</span>
                                                            <span onclick="submitRating('UB-9411', 2)">⭐</span>
                                                            <span onclick="submitRating('UB-9411', 3)">⭐</span>
                                                            <span onclick="submitRating('UB-9411', 4)">⭐</span>
                                                            <span onclick="submitRating('UB-9411', 5)">⭐</span>
                                                        </div>
                                                        <small class="text-danger">Assignment rule: -1 point if not rated within 48 hours.</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Category 3: PAST ORDERS -->
                                        <div class="orders-sub-group">
                                            <div class="orders-group-title">PAST ORDERS</div>
                                            <div class="order-card status-completed">
                                                <div class="order-body">
                                                    <h4>Pasta Bolognese</h4>
                                                    <p class="order-meta">Completed • Rated 4/5 ⭐</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- SECTION: AS CHEF -->
                                    <div id="chef-orders" class="orders-section">
                                        
                                        <!-- New Requests -->
                                        <div class="orders-sub-group">
                                            <div class="orders-group-title">NEW STUDENT REQUESTS</div>
                                            <div class="order-card">
                                                <div class="order-header">
                                                    <span class="order-id">#REQ-102</span>
                                                    <span class="badge-incoming">New Request</span>
                                                </div>
                                                <div class="order-body">
                                                    <h4>Lentil Soup (Your Meal)</h4>
                                                    <p class="order-meta"><strong>Requesting Student:</strong> Giorgos A.</p>
                                                    <p class="order-meta"><small>Approval automatically reduces your available portions.</small></p>
                                                </div>
                                                <div class="chef-actions">
                                                    <button class="btn-approve" onclick="manageRequest('102', 'approve')">✓ Approve</button>
                                                    <button class="btn-reject" onclick="manageRequest('102', 'reject')">✕ Reject</button>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Pending Pickups -->
                                        <div class="orders-sub-group">
                                            <div class="orders-group-title">PENDING PICKUPS</div>
                                            <div class="order-card">
                                                <div class="order-header">
                                                    <span class="order-id">#REQ-099</span>
                                                    <span class="badge-pending-pickup">Ready for Delivery</span>
                                                </div>
                                                <div class="order-body">
                                                    <h4>Burgers with Potatoes</h4>
                                                    <p class="order-meta"><strong>Requesting Student:</strong> Kostas D.</p>
                                                </div>
                                                <div class="chef-delivery-actions">
                                                    <button class="btn-delivered" onclick="markDelivery('099', 'success')">Delivered</button>
                                                    <button class="btn-noshow" onclick="markDelivery('099', 'noshow')">No Show (-1 point)</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`,
            page_bonus_title: "Bonus & Points",
            page_bonus_desc: "Earn points by cooking and sharing food!<br>Redeem them for rewards or free meals.",
            page_account_title: "My Profile",
            page_account_desc: `
                                <div class="academic-profile-wrapper">
                                    <div class="academic-grid-top">
                                        <div class="academic-card card-avatar-accent">
                                            <div class="academic-card-avatar-zone">
                                                <div class="academic-avatar-wrapper">
                                                    <div class="academic-avatar-letter" id="profileAvatarLetterEN">U</div>
                                                    <div class="academic-verified-badge">✓</div>
                                                </div>
                                                <h3 class="academic-profile-name" id="profileNameDisplayEN">User</h3>
                                                <p class="academic-profile-sub">UniBite Student</p>
                                                <span class="academic-role-badge">Verified Academic Member</span>
                                                <div class="academic-user-stats">
                                                    <div class="stat-box"><span class="stat-number">5</span><span class="stat-label">Points</span></div>
                                                    <div class="stat-box"><span class="stat-number">12</span><span class="stat-label">Offered</span></div>
                                                    <div class="stat-box"><span class="stat-number">8</span><span class="stat-label">Received</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="academic-card card-info-accent">
                                            <h3 class="academic-card-title">Academic Information</h3>
                                            <table class="academic-table">
                                                <tr><td class="academic-label">Username</td><td class="academic-value" id="profileUsernameEN">xristos</td></tr>
                                                <tr><td class="academic-label">Academic E-mail</td><td class="academic-value">up1112136@upnet.gr</td></tr>
                                                <tr><td class="academic-label">Student ID</td><td class="academic-value">1112136</td></tr>
                                                <tr><td class="academic-label">Department</td><td class="academic-value">CEID</td></tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>`,
            page_account_desc_prefix: "",
            page_account_desc_suffix: "",
            page_account_role_student: "Student",
            page_account_role_admin: "Administrator",
            profile_user_info: "User Information",
            profile_personal_info: "Personal Information",
            profile_rights: "Rights",
            profile_email: "E-mail",
            profile_student_id: "Student ID",
            profile_category: "Department",
            profile_member_since: "Member since",
            profile_delete_account: "Delete Account",
            profile_delete_warning: "To delete your account, you must Delete account by clicking the button below.",
            profile_delete_button: "Delete account",
            profile_points: "Points",
            profile_meals_offered: "Meals offered",
            profile_meals_received: "Meals received",
            page_admin_title: "Admin Dashboard",
            page_admin_desc: "Welcome to the admin control panel!<br>Here you can view statistics, manage users and oversee the platform.<br><br>Total meals shared: <strong>127</strong><br>Top Donor: <strong>Maria P.</strong><br>Top rated meal: <strong>Moussaka (4.8/5)</strong>",
            page_default_title: "UniBite",
            page_default_desc: "Choose an option from the menu or one of the cards",
            popup_order_accepted: "Your order has been sent to the cook and has been accepted.",
            popup_not_enough_points: "You do not have enough points to reserve a portion.",
            popup_ok: "OK"
        }
    };

    // ===== ΣΥΝΑΡΤΗΣΕΙΣ ΕΜΦΑΝΙΣΗΣ ΑΓΓΕΛΙΩΝ & ΑΙΤΗΜΑΤΩΝ =====
window.renderChefListings = function() {
    const container = document.querySelector('.listing-panel');
    if (!container) return;

    if (window.appData.listings.length === 0) {
        container.innerHTML = '<div class="empty-state">Δεν έχετε δημοσιεύσει κάποια αγγελία ακόμη.</div>';
        document.querySelector('.counter-text').textContent = '(0 ενεργές)';
        return;
    }

    document.querySelector('.counter-text').textContent = `(${window.appData.listings.length} ενεργές)`;

    container.innerHTML = window.appData.listings.map(listing => `
        <div class="listing-card" data-id="${listing.id}">
            <div class="listing-header">
                <h4 class="listing-name">${listing.title}</h4>
                <div class="listing-actions">
                    <button class="action-btn edit-btn" title="Επεξεργασία" onclick="window.editChefListing(${listing.id})">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    </button>
                    <button class="action-btn delete-btn" title="Διαγραφή" onclick="window.deleteChefListing(${listing.id})">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                    </button>
                </div>
            </div>
            <div class="listing-details">
                <span class="detail-tag tag-location">📍 ${listing.location}</span>
                <span class="detail-tag tag-qty">🍽️ ${listing.quantity} μερίδες</span>
                <span class="detail-tag tag-time">🕒 Έως ${listing.time}</span>
            </div>
        </div>
    `).join('');
};

window.renderChefRequests = function() {
    const container = document.querySelector('.requests-list');
    const badge = document.querySelector('.requests-badge');
    if (!container) return;

    if (window.appData.requests.length === 0) {
        container.innerHTML = '<div class="empty-state">Δεν υπάρχουν εκκρεμή αιτήματα.</div>';
        if (badge) badge.textContent = '0 νέα';
        return;
    }

    const unreadCount = window.appData.requests.filter(r => r.unread).length;
    if (badge) badge.textContent = `${unreadCount} νέα`;

    container.innerHTML = window.appData.requests.map(req => `
        <div class="request-card ${req.unread ? 'unread' : ''}" data-id="${req.id}">
            <div class="request-header">
                <div class="user-info">
                    <div class="user-avatar">${req.avatar}</div>
                    <div>
                        <h5 class="user-name">${req.userName}</h5>
                        <span class="request-time">${req.timeAgo}</span>
                    </div>
                </div>
            </div>
            <div class="request-details">
                <div class="request-target">
                    <span class="details-label">Αγγελία</span>
                    <span class="details-value">${req.listingTitle}</span>
                </div>
                <div class="request-qty">
                    <span class="details-label">Ζητημένες μερίδες</span>
                    <span class="portions-badge">${req.quantity} μερίδα</span>
                </div>
            </div>
            <div class="request-actions">
                <button class="btn-req btn-accept" title="Αποδοχή" onclick="window.handleRequest(${req.id}, 'accept')">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>Αποδοχή</span>
                </button>
                <button class="btn-req btn-reject" title="Απόρριψη" onclick="window.handleRequest(${req.id}, 'reject')">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    <span>Απόρριψη</span>
                </button>
            </div>
        </div>
    `).join('');
};

    let currentLang = localStorage.getItem('unibite_lang') || 'el';
    let loggedUser = localStorage.getItem('unibite_user') || 'xristos';
    let userRole = localStorage.getItem('unibite_role') || 'student';
    let lastLoadedPage = 'home';
    let consumerMap = null;

    if (!loggedUser) {
        window.location.href = 'index.html';
        return;
    }

    const hamburger = document.getElementById('hamburgerBtn');
    const sidebar = document.getElementById('sidebarMenu');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('mainContent');
    const backBtn = document.getElementById('backBtn');

    window.navigateToPage = function(pageId) {
    const t = translations[currentLang];
    const usernameValue = localStorage.getItem("unibite_user") || loggedUser;
    const roleValue = localStorage.getItem("unibite_role") || userRole;
    
    if (pageId === "myaccount" || pageId === "account") {
        // Ενημέρωση μόνο των στοιχείων, όχι ολόκληρου του innerHTML
        const nameField = document.getElementById("profileName");
        const amField = document.getElementById("profileAM");
        const usernameField = document.getElementById("profileUsername");
        const avatarLetter = document.getElementById("profileAvatarLetter");
        const profileNameDisplay = document.getElementById("profileNameDisplay");
        const roleSubField = document.getElementById("profileRoleSub");
        
        if (nameField) nameField.innerText = usernameValue === "xristos" ? "Χρήστος Παπαδόπουλος" : usernameValue;
        if (amField) amField.innerText = usernameValue === "xristos" ? "1112136" : "ΑΜ-" + usernameValue;
        if (usernameField) usernameField.innerText = usernameValue;
        if (avatarLetter) avatarLetter.innerText = usernameValue.charAt(0).toUpperCase();
        if (profileNameDisplay) profileNameDisplay.innerText = usernameValue.charAt(0).toUpperCase() + usernameValue.slice(1);
        if (roleSubField) roleSubField.innerText = roleValue === "admin" ? "Διαχειριστής UniBite" : "Φοιτητής UniBite";
    }
};

    function updateLanguage() {
        const t = translations[currentLang];
        
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (t[key]) {
                if (el.classList.contains('welcome-message') && key === 'welcome_prefix') {
                    el.innerHTML = `${t[key]} ${loggedUser}!`;
                } else {
                    el.innerHTML = t[key];
                }
            }
        });
        
        const welcomeMsg = document.getElementById('welcomeMsg');
        if (welcomeMsg && !welcomeMsg.hasAttribute('data-key-specific')) {
            welcomeMsg.innerHTML = `${t.welcome_prefix} ${loggedUser}!`;
        }
        
        const currentLangSpan = document.getElementById('currentLang');
        if (currentLangSpan) {
            currentLangSpan.innerHTML = currentLang === 'el' ? '🇬🇷 Ελληνικά ⋁' : '🇬🇧 English ⋁';
        }
        
        if (lastLoadedPage) {
            loadPage(lastLoadedPage);
        }
    }

    window.setLanguage = function(lang) {
        currentLang = lang;
        localStorage.setItem('unibite_lang', lang);
        updateLanguage();
        
        const selector = document.getElementById('langSelector');
        if (selector) selector.classList.remove('open');
    }

    function initLanguageDropdown() {
        const selector = document.getElementById('langSelector');
        const currentSpan = document.getElementById('currentLang');
        const dropdown = document.getElementById('langDropdown');
        
        if (!selector || !currentSpan || !dropdown) return;
        
        currentSpan.innerHTML = currentLang === 'el' ? '🇬🇷 Ελληνικά ⋁' : '🇬🇧 English ⋁';
        
        currentSpan.addEventListener('click', (e) => {
            e.stopPropagation();
            selector.classList.toggle('open');
        });
        
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                if (lang) window.setLanguage(lang);
            });
        });
        
        document.addEventListener('click', () => {
            selector.classList.remove('open');
        });
    }

    function closeMenu() {
        if (sidebar) sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('show');
    }

    function openMenu() {
        if (sidebar) sidebar.classList.add('open');
        if (overlay) overlay.classList.add('show');
    }

    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            if (sidebar && sidebar.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    function updateBackButton() {
        if (backBtn) {
            if (lastLoadedPage !== 'home') {
                backBtn.style.display = 'flex';
            } else {
                backBtn.style.display = 'none';
            }
        }
    }

    window.loadPage = function(pageId) {
        lastLoadedPage = pageId;
        const t = translations[currentLang];
        let title = '';
        let description = '';
        
        const cardsContainer = document.getElementById('cardsContainer');
        const unibiteIntro = document.getElementById('unibiteIntroSection');
        const adminDashboard = document.getElementById('adminDashboardSection');
        
        if (cardsContainer) cardsContainer.style.display = 'none';
        if (unibiteIntro) unibiteIntro.style.display = 'none';
        if (adminDashboard) adminDashboard.style.display = 'none';

        document.querySelectorAll('.app-page').forEach(p => p.style.display = 'none');
        
        switch(pageId) {
            case 'home':
            title = t.page_home_title;
            description = t.page_home_desc;
            
            // ΕΜΦΑΝΙΣΗ ΤΗΣ ΑΡΧΙΚΗΣ ΣΕΛΙΔΑΣ (LAYOUT ΜΕ ΕΙΚΟΝΑ ΚΑΙ ΚΕΙΜΕΝΟ)
            if (unibiteIntro) unibiteIntro.style.display = 'flex';
            
            // Απόκρυψη των υπόλοιπων σελίδων
            document.querySelectorAll('.app-page').forEach(page => {
                if (page.id === 'page-home') {
                    page.style.display = 'block';
                } else {
                    page.style.display = 'none';
                }
            });
            break;
            case 'orders':
            case 'myorders':
                title = pageId === 'orders' ? t.page_orders_title : t.page_myorders_title;
                description = pageId === 'orders' ? t.page_orders_desc : t.page_myorders_desc;
                break;
            case 'payments':
                title = t.page_payments_title;
                description = t.page_payments_desc;
                break;
            case 'faq':
                title = t.page_faq_title;
                description = t.page_faq_desc;
                break;
            case 'settings':
                title = t.page_settings_title;
                description = t.page_settings_desc;
                break;
            case 'chef':
            case 'cook':
                title = t.page_chef_title;
                description = "";
                document.getElementById('page-cook').style.display = 'block';
                // Αρχικοποίηση της σελίδας μάγειρα
                setTimeout(function() {
                    if (typeof window.initCookPage === 'function') {
                        window.initCookPage();
                    }
                }, 100);
                break;
            case 'consumer':
                title = t.page_consumer_reserve_title;
                description = t.page_consumer_reserve_desc;
                break;
            case 'bonus':
                title = t.page_bonus_title;
                description = t.page_bonus_desc;
                // initBonusPage καλείται μέσω show logic παρακάτω
                break;
            case 'account':
                title = t.page_account_title;
                description = t.page_account_desc;
                break;
            case 'admin':
                title = "Διαχειριστής - Πίνακας Ελέγχου";
                description = "Συνολικά στατιστικά χρήσης και κατάταξη της κοινότητας UniBite.";
                if (adminDashboard) adminDashboard.style.display = 'block';
                if (typeof loadAdminStats === 'function') {
                    loadAdminStats();
                }
                break;
            case 'back':
                localStorage.removeItem('unibite_user');
                localStorage.removeItem('unibite_role');
                window.location.href = 'index.html';
                return;
            case 'myorders':
            case 'orders':
                title = t.page_myorders_title;
                description = t.page_myorders_desc;
                if (unibiteIntro) unibiteIntro.style.display = 'none';
                
                // ΠΡΟΣΘΕΣΕ ΑΥΤΟ: Εκτέλεση της συνάρτησης για να εμφανιστούν οι κάρτες
                setTimeout(renderMyOrders, 50); 
                break;
            default:
                title = t.page_default_title;
                description = t.page_default_desc;
                const homePageDivDefault = document.getElementById('page-home');
                if (homePageDivDefault) homePageDivDefault.style.display = 'block';
                if (unibiteIntro) unibiteIntro.style.display = 'flex';
                break;
        }
        
        if (mainContent) {
            const welcomeMsgDiv = mainContent.querySelector('.welcome-message');
            const subMsgDiv = mainContent.querySelector('.sub-message');
            
            if (welcomeMsgDiv && title) welcomeMsgDiv.innerHTML = title;
            if (subMsgDiv !== null) subMsgDiv.innerHTML = description || '';
        }

        // Κρύψε όλα τα app-page
        document.querySelectorAll('.app-page').forEach(p => p.style.display = 'none');

        // Χαρτογράφηση pageId → div id
        const pageMap = {
            'home':     'page-home',
            'consumer': 'page-consumer',
            'myorders': 'page-myorders',
            'orders':   'page-myorders',
            'cook':     'page-cook',
            'chef':     'page-cook',
            'bonus':    'page-bonus',
            'faq':      'page-faq',
            'settings': 'page-settings',
            'account':  'page-account'
        };

        // Σελίδες που δείχνουν το div τους αντί για welcome/sub message
        const divPages = ['bonus', 'consumer', 'myorders', 'orders', 'cook', 'chef', 'account'];

        if (pageId === 'home') {
            const hp = document.getElementById('page-home');
            if (hp) hp.style.display = 'block';
            if (mainContent.querySelector('.welcome-message')) mainContent.querySelector('.welcome-message').style.display = 'none';
            if (mainContent.querySelector('.sub-message')) mainContent.querySelector('.sub-message').style.display = 'none';
        } else if (divPages.includes(pageId)) {
            // Δείξε το αντίστοιχο page div αντί για welcome/sub
            if (mainContent.querySelector('.welcome-message')) mainContent.querySelector('.welcome-message').style.display = 'none';
            if (mainContent.querySelector('.sub-message')) mainContent.querySelector('.sub-message').style.display = 'none';
            const targetId = pageMap[pageId];
            const targetDiv = document.getElementById(targetId);
            if (targetDiv) targetDiv.style.display = 'block';

            // Γέμισε το Consumer div με το πλούσιο περιεχόμενο από translations
                        // Γέμισε το Consumer div με το πλούσιο περιεχόμενο από translations
            if (pageId === 'consumer') {
                // Γέμισε δυναμικά τις κάρτες αγγελιών και αρχικοποίησε τον χάρτη
                setTimeout(function() {
                    initConsumerPage();
                }, 100);
            }
            // Γέμισε το Account div με το πλούσιο περιεχόμενο από translations
            if (pageId === 'account') {
                targetDiv.innerHTML = '<h2 class="page-title">' + t.page_account_title + '</h2>' + t.page_account_desc;
                // Ενημέρωση στοιχείων χρήστη μετά την εισαγωγή του HTML
                setTimeout(function() {
                    const usernameVal = localStorage.getItem('unibite_user') || loggedUser;
                    const roleVal = localStorage.getItem('unibite_role') || userRole;
                    const nameF = document.getElementById('profileName');
                    const amF = document.getElementById('profileAM');
                    const avatarLetter = document.getElementById('profileAvatarLetter');
                    const profileNameDisplay = document.getElementById('profileNameDisplay');
                    const roleSubField = document.getElementById('profileRoleSub');
                    const usernameField = document.getElementById('profileUsername');
                    if (nameF) nameF.innerText = usernameVal === "xristos" ? "Χρήστος Κολιάς" : usernameVal;
                    if (amF) amF.innerText = usernameVal === "xristos" ? "1112136" : "ΑΜ-" + usernameVal;
                    if (usernameField) usernameField.innerText = usernameVal;
                    if (avatarLetter) avatarLetter.innerText = usernameVal.charAt(0).toUpperCase();
                    if (profileNameDisplay) profileNameDisplay.innerText = usernameVal === "xristos" ? "Χρήστος Κολιάς" : (usernameVal.charAt(0).toUpperCase() + usernameVal.slice(1));
                    if (roleSubField) roleSubField.innerText = roleVal === "admin" ? "Διαχειριστής UniBite" : "Φοιτητής UniBite";
                }, 0);
            }

            // Εκκίνηση bonus page
            if (pageId === 'bonus') {
                setTimeout(function() { initBonusPage(); }, 50);
            }
            // Εκκίνηση my orders page
            if (pageId === 'myorders' || pageId === 'orders') {
                setTimeout(renderMyOrders, 50);
            }
        } else if (pageId === 'faq' || pageId === 'settings') {
            // FAQ και Ρυθμίσεις: δείξε τα page divs τους
            if (mainContent.querySelector('.welcome-message')) mainContent.querySelector('.welcome-message').style.display = 'none';
            if (mainContent.querySelector('.sub-message')) mainContent.querySelector('.sub-message').style.display = 'none';
            const faqSettingsMap = { 'faq': 'page-faq', 'settings': 'page-settings' };
            const fsDiv = document.getElementById(faqSettingsMap[pageId]);
            if (fsDiv) fsDiv.style.display = 'block';
            if (pageId === 'settings') {
                setTimeout(function() {
                    const toggle = document.getElementById('darkModeToggle');
                    if (toggle) toggle.checked = localStorage.getItem('theme') === 'dark';
                }, 0);
            }
        } else {
            // Για admin και λοιπές σελίδες δείξε title/description
            if (mainContent.querySelector('.welcome-message')) mainContent.querySelector('.welcome-message').style.display = '';
            if (mainContent.querySelector('.sub-message')) mainContent.querySelector('.sub-message').style.display = '';
        }
        
        document.querySelectorAll('.nav-menu-item, .top-nav-item').forEach(item => {
            item.classList.remove('active');
        });
        const activeItem = document.querySelector(`[data-page="${pageId}"], [onclick*="'${pageId}'"]`);
        if (activeItem) activeItem.classList.add('active');
        
        updateBackButton();
        closeMenu();
    };

        // ── Αρχικοποίηση σελίδας καταναλωτή: γεμίζει κάρτες + χάρτη ──────────────
    function initConsumerPage() {
        renderConsumerListings();
        initStudentMap();
    }

    // ── Δεδομένα αγγελιών (mock) ─────────────────────────────────────────────
    var LISTINGS_DATA = [
        { id: 1, title: "Μακαρόνια με κιμά",     chef: "Νίκος Κ.",  address: "Τμήμα CEID, Κτίριο Β",         pickup: "14:00-15:00", allergens: "Γλουτένη", portions: 3, active: true,  lat: 38.2892, lng: 21.7889, img: "images/kimas.jpg" },
        { id: 2, title: "Φασολάκια με πατάτες",   chef: "Μαρία Π.", address: "Φοιτητική Εστία, Δωμ. 105",   pickup: "13:00-14:00", allergens: "Κανένα",   portions: 2, active: true,  lat: 38.2876, lng: 21.7854, img: "images/fasolakia.jpg" },
        { id: 3, title: "Ψάρι στον φούρνο",       chef: "Κώστας Δ.", address: "Πρυτανεία, 1ος Όροφος",      pickup: "12:00-13:00", allergens: "Κανένα",   portions: 0, active: false, lat: 38.2500, lng: 21.7400, img: "images/psari.jpg" },
        { id: 4, title: "Μπιφτέκια με πατάτες",   chef: "Ελένη Σ.", address: "Φοιτητική Εστία, Δωμ. 52",   pickup: "15:00-15:30", allergens: "Αυγά",     portions: 0, active: false, lat: 38.2877, lng: 21.7855, img: "images/mpiftekia.jpg" }
    ];

    // ── Render κάρτας αγγελίας ──────────────────────────────────────────────
    function buildListingCard(l) {
        var isExhausted = !l.active || l.portions === 0;
        var badge = isExhausted
            ? '<span class="consumer-portions-badge exhausted-badge">Εξαντλήθηκε</span>'
            : '<span class="consumer-portions-badge active-badge">✓ ' + l.portions + ' μερίδες</span>';
        var btn = isExhausted
            ? '<button class="consumer-reserve-btn" disabled>Μη διαθέσιμο</button>'
            : '<button class="consumer-reserve-btn" onclick="window.requestMeal(' + l.id + ')">Δέσμευση</button>';
        return '<div class="consumer-listing-card' + (isExhausted ? ' exhausted' : '') + '">'
            + '<img src="' + l.img + '" alt="' + l.title + '" style="width:88px;height:88px;object-fit:cover;flex-shrink:0;" onerror="this.style.cssText=>'
            + '<div class="consumer-listing-info">'
            +   '<div>'
            +     '<h4>' + l.title + '</h4>'
            +     '<p> ' + l.chef + '</p>'
            +     '<p> ' + l.address + '</p>'
            +     '<p> ' + l.pickup + '</p>'
            +     '<p> ' + l.allergens + '</p>'
            +   '</div>'
            +   '<div class="consumer-listing-footer">' + badge + btn + '</div>'
            + '</div></div>';
    }

    // ── Render αγγελιών στα δύο panels ──────────────────────────────────────
    // ── Render αγγελιών στα δύο panels με counters ──────────────────────────────
    function renderConsumerListings() {
        var activeContainer    = document.getElementById('activeListingsContainer');
        var exhaustedContainer = document.getElementById('exhaustedListingsContainer');
        var activeCountSpan    = document.getElementById('activeCount');
        var exhaustedCountSpan = document.getElementById('exhaustedCount');
        
        if (!activeContainer || !exhaustedContainer) return;

        var active    = LISTINGS_DATA.filter(function(l) { return l.active && l.portions > 0; });
        var exhausted = LISTINGS_DATA.filter(function(l) { return !l.active || l.portions === 0; });

        // Ενημέρωση counters
        if (activeCountSpan) activeCountSpan.innerText = active.length;
        if (exhaustedCountSpan) exhaustedCountSpan.innerText = exhausted.length;

        activeContainer.innerHTML = active.length > 0
            ? active.map(buildListingCard).join('')
            : '<div class="consumer-empty"><div class="empty-emoji">🍽️✨</div><p>Δεν υπάρχουν ενεργές αγγελίες προς το παρόν</p><small>Έλα ξανά αργότερα!</small></div>';

        exhaustedContainer.innerHTML = exhausted.length > 0
            ? exhausted.map(buildListingCard).join('')
            : '<div class="consumer-empty"><div class="empty-emoji">✅🎉</div><p>Δεν υπάρχουν εξαντλημένες αγγελίες</p><small>Όλες οι μερίδες είναι διαθέσιμες!</small></div>';
    }

    // ── Αρχικοποίηση χάρτη Leaflet στο studentMap ────────────────────────────
    var studentMapInstance = null;
    function initStudentMap() {
        var mapDiv = document.getElementById('studentMap');
        if (!mapDiv) return;

        // Αν ο χάρτης υπάρχει ήδη, απλά invalidate size
        if (studentMapInstance) {
            setTimeout(function() { studentMapInstance.invalidateSize(); }, 100);
            return;
        }

        var patras = [38.2466, 21.7346];
        studentMapInstance = L.map('studentMap').setView(patras, 14);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://carto.com">CARTO</a>',
            subdomains: 'abcd', maxZoom: 19
        }).addTo(studentMapInstance);

        // Markers για κάθε αγγελία
        LISTINGS_DATA.forEach(function(listing) {
            var isActive = listing.active && listing.portions > 0;
            var color = isActive ? '#800020' : '#94a3b8';

            // Custom icon
            var iconHtml = '<div style="'
                + 'width:32px;height:38px;position:relative;'
                + '">'
                + '<svg viewBox="0 0 32 38" fill="' + color + '" xmlns="http://www.w3.org/2000/svg" style="width:32px;height:38px;">'
                + '<path d="M16 0C8.268 0 2 6.268 2 14c0 10.5 14 24 14 24S30 24.5 30 14C30 6.268 23.732 0 16 0z"/>'
                + '</svg>'
                + '<div style="position:absolute;top:6px;left:50%;transform:translateX(-50%);color:white;font-weight:700;font-size:11px;">'
                + (isActive ? listing.portions : '✗')
                + '</div>'
                + '</div>';

            var icon = L.divIcon({
                html: iconHtml,
                className: '',
                iconSize: [32, 38],
                iconAnchor: [16, 38],
                popupAnchor: [0, -40]
            });

            var marker = L.marker([listing.lat, listing.lng], { icon: icon }).addTo(studentMapInstance);

            var popupContent = '<div style="font-family:Inter,sans-serif;min-width:180px;">'
                + '<strong style="color:#800020;font-size:14px;">' + listing.title + '</strong><br>'
                + '<span style="color:#64748b;font-size:12px;"> ' + listing.chef + '</span><br>'
                + '<span style="color:#64748b;font-size:12px;"> ' + listing.address + '</span><br>'
                + '<span style="color:#64748b;font-size:12px;"> ' + listing.pickup + '</span><br>'
                + (isActive
                    ? '<span style="color:#16a34a;font-weight:600;font-size:12px;">✓ ' + listing.portions + ' διαθέσιμες μερίδες</span><br>'
                      + '<button onclick="window.requestMeal(' + listing.id + ')" style="margin-top:8px;width:100%;background:#800020;color:white;border:none;padding:7px;border-radius:6px;cursor:pointer;font-size:12px;font-weight:600;">Δέσμευση</button>'
                    : '<span style="color:#dc2626;font-weight:600;font-size:12px;">✗ Εξαντλήθηκε</span>')
                + '</div>';

            marker.bindPopup(popupContent);
        });

        // Τοποθεσία χρήστη
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos) {
                var userLoc = [pos.coords.latitude, pos.coords.longitude];
                L.circleMarker(userLoc, {
                    radius: 8, fillColor: '#3b82f6', color: 'white',
                    weight: 3, opacity: 1, fillOpacity: 1
                }).bindPopup('<strong>Η τοποθεσία σου</strong>').addTo(studentMapInstance);
                studentMapInstance.setView(userLoc, 15);
            }, function() {});
        }
    }

    function initConsumerMap() {
        var mapContainer = document.getElementById('map');
        if (!mapContainer) {
            console.log("Map container not found yet");
            return;
        }
        
        // Καθαρισμός αν υπάρχει ήδη χάρτης
        if (consumerMap) {
            consumerMap.remove();
            consumerMap = null;
        }
        
        var patras = [38.2466, 21.7346];
        
        try {
            consumerMap = L.map('map').setView(patras, 14);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                subdomains: 'abcd',
                maxZoom: 19,
                minZoom: 3
            }).addTo(consumerMap);
            
            // Σημεία για τον χάρτη
            var locations = [
                { lat: 38.2892, lng: 21.7889, title: "Μακαρόνια με κιμά", address: "Τμήμα Μηχανικών Ηλεκτρονικών Υπολογιστών & Πληροφορικής, Κτίριο Β", time: "14:00-15:00" },
                { lat: 38.2876, lng: 21.7854, title: "Φασολάκια με πατάτες", address: "Φοιτητική Εστία, Δωμάτιο 105", time: "13:00-14:00" },
                { lat: 38.2500, lng: 21.7400, title: "Ψάρι στον φούρνο", address: "Πρυτανεία, 1ος Όροφος", time: "12:00-13:00" }
            ];
            
            locations.forEach(function(loc) {
                var marker = L.marker([loc.lat, loc.lng]).addTo(consumerMap);
                marker.bindPopup('<b>' + loc.title + '</b><br>' + loc.address + '<br>🕒 ' + loc.time);
            });
            
            // Προσθήκη τοποθεσίας χρήστη αν επιτρέπεται
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        var userLoc = [position.coords.latitude, position.coords.longitude];
                        L.marker(userLoc, {
                            icon: L.divIcon({ className: 'user-location-marker', html: '📍', iconSize: [20, 20] })
                        }).bindPopup('Η τοποθεσία σας').addTo(consumerMap);
                        consumerMap.setView(userLoc, 14);
                    },
                    function() { console.log("Geolocation not available"); }
                );
            }
            
            setTimeout(function() { consumerMap.invalidateSize(); }, 200);
            
        } catch(e) {
            console.log("Error creating map:", e);
        }
    }
    
    window.showImage = function(imageUrl) {
        let modal = document.getElementById('imageModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'imageModal';
            modal.className = 'image-modal';
            modal.onclick = function() { this.classList.remove('show'); };
            document.body.appendChild(modal);
            const img = document.createElement('img');
            img.id = 'modalImage';
            modal.appendChild(img);
        }
        const modalImg = document.getElementById('modalImage');
        if (modalImg) modalImg.src = imageUrl;
        modal.classList.add('show');
    };
    
    window.requestMeal = function(id) {
        // Υποθέτουμε ότι οι αγγελίες σου βρίσκονται σε έναν πίνακα listings (όπως αυτόν που είχε ο χάρτης σου)
        // Ψάχνουμε να βρούμε την αγγελία με το σωστό ID
        const listings = [
            { id: 1, title: "Μακαρόνια με κιμά", chef: "Νίκος Κ.", address: "Τμήμα Μηχανικών Ηλεκτρονικών Υπολογιστών & Πληροφορικής, Κτίριο Β", pickup: "14:00 - 15:00", allergens: "Γλουτένη" },
            { id: 2, title: "Φασολάκια με πατάτες", chef: "Μαρία Π.", address: "Φοιτητική Εστία, Δωμάτιο 105", pickup: "13:00 - 14:00", allergens: "Κανένα" }
        ];

        const selectedAd = listings.find(item => item.id === id);
        
        if (selectedAd) {
            // Προσθήκη της αγγελίας στις ενεργές παραγγελίες
            myOrders.push({
                id: selectedAd.id,
                title: selectedAd.title,
                chef: selectedAd.chef,
                address: selectedAd.address,
                pickup: selectedAd.pickup,
                allergens: selectedAd.allergens,
                status: "active" // Η παραγγελία ξεκινάει ως ενεργή
            });

            alert(`Η μερίδα "${selectedAd.title}" δεσμεύτηκε με επιτυχία!`);
            
            // Αν ο χρήστης είναι ήδη στη σελίδα των παραγγελιών, ανανέωσε την οθόνη
            renderMyOrders();
        } else {
            alert("Η αγγελία δεν βρέθηκε.");
        }
    };
    
    window.confirmDeleteAccount = function() {
        let confirmDelete = confirm("Είσαι σίγουρος/η ότι θέλεις να διαγράψεις τον λογαριασμό σου;\n\nΑυτή η ενέργεια είναι μη αναστρέψιμη και θα χάσεις όλους τους πόντους και το ιστορικό σου.");
        if (confirmDelete) {
            let finalConfirm = confirm("Η διαγραφή είναι μόνιμη. Θα χαθούν όλα τα δεδομένα σου. Θες να συνεχίσεις;");
            if (finalConfirm) {
                alert("Ο λογαριασμός σου διαγράφηκε. Θα ανακατευθυνθείς στην αρχική σελίδα.");
                localStorage.removeItem('unibite_user');
                localStorage.removeItem('unibite_role');
                window.location.href = 'index.html';
            }
        }
    };

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) window.loadPage(page);
            closeMenu();
        });
    });

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const cardType = this.getAttribute('data-card');
            if (cardType) window.loadPage(cardType);
        });
    });
    
    const topNavItems = document.querySelectorAll('.top-nav-item');
    topNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                topNavItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                window.loadPage(page);
            }
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.loadPage('home');
        });
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        const userRole = localStorage.getItem("unibite_role");
        const adminSidebarLink = document.getElementById("sidebarAdminLink");
                // Initialize bonus page if we're on bonus page
        const bonusPointsElement = document.getElementById('loyaltyPoints');
        if (bonusPointsElement) {
            initBonusPage();
        }
        
        // Also initialize if current page is bonus (for direct navigation)
        if (lastLoadedPage === 'bonus') {
            setTimeout(function() {
                initBonusPage();
            }, 100);
        }
        if (userRole === "admin") {
            if (adminSidebarLink) {
                adminSidebarLink.style.display = "flex";
            }
            window.loadPage('admin');
        } else {
            if (adminSidebarLink) {
                adminSidebarLink.style.display = "none";
            }
            window.loadPage('home');
        }
    });
    
    window.switchOrdersTab = function(tabName) {
        const consumerSection = document.getElementById('consumer-orders');
        const chefSection = document.getElementById('chef-orders');
        
        if (consumerSection) consumerSection.style.display = 'none';
        if (chefSection) chefSection.style.display = 'none';
        
        document.querySelectorAll('.orders-tabs .tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        if (tabName === 'consumer') {
            if (consumerSection) consumerSection.style.display = 'block';
            const btn = document.querySelector('.orders-tabs .tab-btn:nth-child(1)');
            if (btn) btn.classList.add('active');
        } else if (tabName === 'chef') {
            if (chefSection) chefSection.style.display = 'block';
            const btn = document.querySelector('.orders-tabs .tab-btn:nth-child(2)');
            if (btn) btn.classList.add('active');
        }
    }

    window.submitRating = function(orderId, rating) {
        alert(`Επιτυχής βαθμολόγηση με ${rating}/5 αστέρια για την παραγγελία ${orderId}! Ευχαριστούμε.`);
    };

    window.showCustomAlert = function(title, message, icon = "💡") {
        const modal = document.getElementById("customAlertModal");
        if (modal) {
            document.getElementById("modalAlertTitle").innerText = title;
            document.getElementById("modalAlertMessage").innerText = message;
            document.getElementById("modalAlertIcon").innerText = icon;
            modal.style.display = "flex";
        }
    };

    window.closeCustomAlert = function() {
        const modal = document.getElementById("customAlertModal");
        if (modal) {
            modal.style.display = "none";
        }
    };

    window.manageRequest = function(reqId, action) {
        if(action === 'approve') {
            showCustomAlert("Έγκριση Αιτήματος", `Το αίτημα #${reqId} εγκρίθηκε με επιτυχία! Οι διαθέσιμες μερίδες της αγγελίας σας μειώθηκαν αυτόματα.`, "✅");
        } else {
            showCustomAlert("Απόρριψη Αιτήματος", `Το αίτημα #${reqId} απορρίφθηκε με επιτυχία.`, "❌");
        }
    };

    window.markDelivery = function(reqId, status) {
        if(status === 'success') {
            showCustomAlert("Επιτυχής Παραλαβή", `Η παραγγελία #${reqId} επισημάνθηκε ως "Παρελήφθη". Οι πόντοι μεταφέρθηκαν στον μάγειρα!`, "🍽️");
        } else if(status === 'noshow') {
            showCustomAlert("Μη Εμφάνιση Χρήστη", `Καταγράφηκε η μη εμφάνιση του χρήστη για την παραγγελία #${reqId}. Το σύστημα UniBite θα εξετάσει την αναφορά.`, "⚠️");
        }
    };

    window.toggleDarkMode = function() {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    function loadAdminStats() {
        const totalSharesLastMonth = 142;
        const mockLeaderboard = [
            { position: 1, name: "Παπαδόπουλος Γιάννης", count: 34 },
            { position: 2, name: "Ντρέλιας Χρήστος", count: 28 },
            { position: 3, name: "Κωνσταντίνου Μαρία", count: 22 },
            { position: 4, name: "Γεωργίου Ανδρέας", count: 19 }
        ];
        const mockTopMeals = [
            { title: "Παστίτσιο της Μαμάς", chef: "Παπαδόπουλος Γιάννης", rating: "4.9/5 ⭐" },
            { title: "Κοτόπουλο με πατάτες στο φούρνο", chef: "Ντρέλιας Χρήστος", rating: "4.7/5 ⭐" },
            { title: "Φακές Σούπα", chef: "Κωνσταντίνου Μαρία", rating: "4.5/5 ⭐" }
        ];
        const mockAllAds = [
            { id: 101, title: "Μακαρόνια με κιμά", chef: "Ντρέλιας Χρήστος", date: "08/06/2026", status: "active" },
            { id: 102, title: "Γεμιστά", chef: "Παπαδόπουλος Γιάννης", date: "08/06/2026", status: "inactive" },
            { id: 99, title: "Μπιφτέκια με ρύζι", chef: "Γεωργίου Ανδρέας", date: "02/05/2026", status: "deleted" }
        ];

        const totalSharesElem = document.getElementById('adminTotalSharesMonth');
        if (totalSharesElem) totalSharesElem.innerText = totalSharesLastMonth;
        
        const topDonorElem = document.getElementById('adminTopDonorName');
        if (topDonorElem && mockLeaderboard.length > 0) topDonorElem.innerText = mockLeaderboard[0].name;
        
        const topRatingElem = document.getElementById('adminTopRating');
        if (topRatingElem && mockTopMeals.length > 0) topRatingElem.innerText = mockTopMeals[0].title;

        const leaderboardBody = document.getElementById('adminLeaderboardBody');
        if (leaderboardBody) {
            leaderboardBody.innerHTML = mockLeaderboard.map(user => `<tr><td><b>#${user.position}</b></td><td>${user.name}</td><td>${user.count} μερίδες</td></tr>`).join('');
        }

        const topMealsBody = document.getElementById('adminTopMealsBody');
        if (topMealsBody) {
            topMealsBody.innerHTML = mockTopMeals.map(meal => `<tr><td>${meal.title}</td><td>${meal.chef}</td><td><span style="color: #fcc419; font-weight:600;">${meal.rating}</span></td></tr>`).join('');
        }

        const allAdsBody = document.getElementById('adminAllAdsBody');
        if (allAdsBody) {
            allAdsBody.innerHTML = mockAllAds.map(ad => {
                let badgeClass = 'status-active';
                let badgeText = 'Ενεργή';
                if (ad.status === 'inactive') {
                    badgeClass = 'status-inactive';
                    badgeText = 'Ανενεργή (0 μερίδες)';
                } else if (ad.status === 'deleted') {
                    badgeClass = 'status-deleted';
                    badgeText = 'Διεγραμμένη (>48ώρες)';
                }
                return `<tr><td>#${ad.id}</td><td>${ad.title}</td><td>${ad.chef}</td><td>${ad.date}</td><td><span class="status-badge ${badgeClass}">${badgeText}</span></td></tr>`;
            }).join('');
        }
    }

    function renderMyOrders() {
        const activeContainer = document.getElementById("activeOrders");
        const completedContainer = document.getElementById("completedOrders");

        if (!activeContainer || !completedContainer) return;

        // Καθαρίζουμε τις στήλες
        activeContainer.innerHTML = "";
        completedContainer.innerHTML = "";

        if (myOrders.length === 0) {
            activeContainer.innerHTML = "<p style='color: #718096; font-style: italic; font-size: 13px;'>Δεν έχετε κάποια κράτηση ακόμη.</p>";
            completedContainer.innerHTML = "<p style='color: #718096; font-style: italic; font-size: 13px;'>Το ιστορικό σας είναι άδειο.</p>";
            return;
        }

        myOrders.forEach(order => {
            // Έλεγχος αν θα εμφανιστεί το κουμπί ολοκλήρωσης (μόνο στις ενεργές)
            const actionButton = order.status === "active" 
                ? `<button class="complete-order-btn" style="margin-top: 12px; background: #2c7a4d; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: 500; font-size: 12px; width: 100%; transition: background 0.2s;" onclick="window.completeOrder(${order.id})">✔ Ολοκλήρωση Παραλαβής</button>`
                : "";

            const cardHTML = `
                <div class="order-card" style="background: #fff; border: 1px solid #edf2f7; padding: 16px; border-radius: 10px; margin-bottom: 14px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);">
                    <h4 style="color: #6b2525; margin-top: 0; margin-bottom: 10px; font-size: 15px; font-weight: 600;">${order.title}</h4>
                    <p style="margin: 5px 0; font-size: 13px; color: #4a5568;"><b>👨‍🍳 Μάγειρας:</b> ${order.chef}</p>
                    <p style="margin: 5px 0; font-size: 13px; color: #4a5568;"><b>📍 Διεύθυνση:</b> ${order.address}</p>
                    <p style="margin: 5px 0; font-size: 13px; color: #4a5568;"><b>🕒 Ώρα Παραλαβής:</b> ${order.pickup}</p>
                    <p style="margin: 5px 0; font-size: 13px; color: #718096;"><b>⚠️ Αλλεργιογόνα:</b> ${order.allergens}</p>
                    ${actionButton}
                </div>
            `;

            // Ταξινόμηση στη σωστή στήλη
            if (order.status === "active") {
                activeContainer.innerHTML += cardHTML;
            } else {
                completedContainer.innerHTML += cardHTML;
            }
        });

        // Αν κάποια από τις δύο στήλες άδειασε μετά το φιλτράρισμα, βάλε ένα μήνυμα
        if (activeContainer.innerHTML === "") {
            activeContainer.innerHTML = "<p style='color: #718096; font-style: italic; font-size: 13px;'>Δεν υπάρχουν εκκρεμείς παραγγελίες.</p>";
        }
        if (completedContainer.innerHTML === "") {
            completedContainer.innerHTML = "<p style='color: #718096; font-style: italic; font-size: 13px;'>Το ιστορικό είναι άδειο.</p>";
        }
    }

        // ========== BONUS & POINTS SYSTEM ==========
    
    // Αρχικά δεδομένα συναλλαγών (προσαρμοσμένα στη δομή που χρειάζεται ο κώδικας)
    let transactionsData = [
        {
            type: "Παραλαβή Μερίδας",
            points: -1,
            date: "02/06/2026",
            food: "Παστίτσιο",
            chef: "Γιώργος Π.",
            portions: 1
        },
        {
            type: "Ποινή Συστήματος",
            points: -1,
            date: "31/05/2026",
            reason: "Δεν υποβλήθηκε κριτική/αξιολόγηση για τη μερίδα που παραλάβατε εντός της υποχρεωτικής διορίας των 48 ωρών."
        },
        {
            type: "Προσφορά (Πολλαπλές Μερίδες)",
            points: 3.5,
            date: "28/05/2026",
            food: "Φασολάκια Κατσαρόλας",
            portions: 2,
            consumers: [
                { name: "Αλέξης", stars: 4, points: 2.0, comment: "Πολύ νόστιμο φαγητό, μεγάλο μπράβο!" },
                { name: "Μαρία", stars: 3, points: 1.5, comment: "Ήταν πολύ καλό, απλά λίγο παραπάνω λάδι." }
            ]
        },
        {
            type: "Προσφορά (Ίδιος Καταναλωτής)",
            points: 4,
            date: "25/05/2026",
            food: "Μουσακάς",
            consumer: "Νίκος Κ.",
            portions: 2,
            stars: 4,
            pointsPerPortion: 2.0,
            comment: "Εξαιρετικός μουσακάς, πήρα μια μερίδα και για τον συγκάτοικό μου!"
        },
        {
            type: "Bonus Εγγραφής",
            points: 5,
            date: "05/06/2026",
            reason: "initial_bonus"
        }
    ];
    
    // Υπολογισμός συνολικών πόντων
    function calculateTotalPoints() {
        let total = 0;
        for (let i = 0; i < transactionsData.length; i++) {
            total += transactionsData[i].points;
        }
        return total;
    }
    
    // Ενημέρωση εμφάνισης πόντων
    function updatePointsDisplay() {
        let pointsElement = document.getElementById('loyaltyPoints');
        if (pointsElement) {
            let total = calculateTotalPoints();
            pointsElement.innerHTML = total + ' πόντοι';
        }
    }
    
    // Ενημέρωση ονόματος στην κάρτα bonus
    function updateBonusCardName() {
        let userName = localStorage.getItem('unibite_user') || 'xristos';
        let bonusCardName = document.getElementById('bonusCardName');
        if (bonusCardName) {
            let formattedName = userName.toUpperCase();
            if (userName === 'xristos') {
                formattedName = 'ΧΡΗΣΤΟΣ ΚΟΛΙΑΣ';
            }
            bonusCardName.innerText = formattedName;
        }
    }
    
    // Εναλλαγή εμφάνισης λεπτομερειών
    function toggleDetails(element) {
        let allBoxes = document.querySelectorAll('.transaction-box');
        for (let i = 0; i < allBoxes.length; i++) {
            if (allBoxes[i] !== element) {
                allBoxes[i].classList.remove('open');
            }
        }
        element.classList.toggle('open');
    }
    
    // Δημιουργία HTML για τα details κάθε συναλλαγής
    function renderDetails(t) {
        if (t.type === "Bonus Εγγραφής" || t.reason === "initial_bonus") {
            return '<p>Bonus εγγραφής UniBite! Σας κάνουμε δώρο τους πρώτους 5 πόντους.</p>';
        }
        
        if (t.type === "Ποινή Συστήματος") {
            return '<p>' + t.reason + '</p>';
        }
        
        if (t.type === "Παραλαβή Μερίδας") {
            return '<p><strong>Τι παρήγγειλα:</strong> ' + t.food + ' (' + t.portions + ' μερίδα)</p>' +
                   '<p><strong>Μάγειρας:</strong> ' + t.chef + '</p>' +
                   '<p><strong>Ημερομηνία & Ώρα:</strong> ' + t.date + ' - 14:30</p>';
        }
        
        if (t.type === "Προσφορά (Πολλαπλές Μερίδες)") {
            let html = '<p><strong>Φαγητό:</strong> ' + t.food + '</p>' +
                       '<p><strong>Διανομή:</strong> ' + t.portions + ' μερίδες συνολικά σε διαφορετικούς φοιτητές</p>';
            
            if (t.consumers) {
                for (let i = 0; i < t.consumers.length; i++) {
                    let c = t.consumers[i];
                    let stars = '';
                    for (let s = 0; s < c.stars; s++) stars += '⭐';
                    html += '<hr>' +
                            '<p><strong>Κριτική ' + (i+1) + ' (' + c.name + '):</strong> ' + stars + ' (' + c.stars + ' αστέρια = +' + c.points + ' πόντοι)</p>';
                    if (c.comment) {
                        html += '<p><em>"' + c.comment + '"</em></p>';
                    }
                }
            }
            return html;
        }
        
        if (t.type === "Προσφορά (Ίδιος Καταναλωτής)") {
            let starDisplay = '';
            for (let s = 0; s < t.stars; s++) starDisplay += '⭐';
            return '<p><strong>Φαγητό:</strong> ' + t.food + '</p>' +
                   '<p><strong>Καταναλωτής:</strong> ' + t.consumer + '</p>' +
                   '<p><strong>Ποσότητα:</strong> ' + t.portions + ' μερίδες στο ίδιο άτομο</p>' +
                   '<p><strong>Αξιολόγηση:</strong> ' + starDisplay + ' (' + t.stars + ' αστέρια = ' + t.pointsPerPortion + ' πόντοι ανά μερίδα)</p>' +
                   '<p><strong>Πράξη Πόντων:</strong> ' + t.portions + ' μερίδες × ' + t.pointsPerPortion + ' πόντοι = +' + t.points + ' πόντοι</p>' +
                   (t.comment ? '<p><strong>Σχόλιο:</strong> <em>"' + t.comment + '"</em></p>' : '');
        }
        
        return '<p>Συναλλαγή</p>';
    }
    
    // Render ιστορικού συναλλαγών
    function renderHistory() {
        let container = document.getElementById('transactionList');
        if (!container) return;
        
        container.innerHTML = '';
        
        // Αντίστροφη σειρά (πιο πρόσφατα πρώτα)
        for (let i = transactionsData.length - 1; i >= 0; i--) {
            let t = transactionsData[i];
            let points = t.points;
            let pointsSign = points > 0 ? '+' : '';
            let pointsClass = points >= 0 ? 'positive' : 'negative';
            
            let box = document.createElement('div');
            box.className = 'transaction-box';
            box.innerHTML = `
                <div class="box-summary">
                    <span class="type">${t.type}</span>
                    <span class="transaction-points ${pointsClass}">${pointsSign}${points} πόντοι</span>
                </div>
                <div class="box-details">
                    ${renderDetails(t)}
                </div>
            `;
            
            (function(b) {
                b.addEventListener('click', function(e) {
                    e.stopPropagation();
                    toggleDetails(b);
                });
            })(box);
            
            container.appendChild(box);
        }
    }
    
    // Φόρτωση αποθηκευμένων συναλλαγών
    function loadTransactionsFromStorage() {
        let stored = localStorage.getItem('unibite_transactions');
        if (stored) {
            try {
                let parsed = JSON.parse(stored);
                if (parsed && parsed.length > 0) {
                    transactionsData = parsed;
                }
            } catch(e) {}
        }
    }
    
    // Αποθήκευση συναλλαγών
    function saveTransactionsToStorage() {
        localStorage.setItem('unibite_transactions', JSON.stringify(transactionsData));
    }
    
    // Προσθήκη νέας συναλλαγής
    window.addTransaction = function(type, points, details) {
        let newTransaction = {
            type: type,
            points: points,
            date: new Date().toLocaleDateString('el-GR'),
            ...details
        };
        transactionsData.push(newTransaction);
        saveTransactionsToStorage();
        updatePointsDisplay();
        renderHistory();
    };
    
    // Αρχικοποίηση bonus page
    function initBonusPage() {
        updatePointsDisplay();
        updateBonusCardName();
        renderHistory();
    }
    
    // Η initBonusPage καλείται μέσα από το loadPage switch παραπάνω
    
    // Φόρτωση δεδομένων κατά την εκκίνηση
    loadTransactionsFromStorage();

    initLanguageDropdown();
    updateLanguage();

})();

    'use strict';

    // ===== GLOBAL STATE =====
    window.appData = {
        listings: [],
        requests: [],
        editingId: null,
        currentPage: 1,
        requestsPerPage: 3,
        nextRequestId: 100,
        initialized: false
    };

    // ===== DOM REFERENCES (lazy — φορτώνονται όταν χρειαστούν) =====
    function getDOM() {
        const cookPage = document.getElementById('page-cook');
        if (!cookPage) return null;
        return {
            form:                cookPage.querySelector('.form-panel form'),
            titleInput:          cookPage.querySelector('.form-panel .form-group:nth-child(1) .input'),
            uploadBox:           cookPage.querySelector('.upload-box'),
            locationInput:       cookPage.querySelector('.form-panel .row-2 .form-group:nth-child(1) .input'),
            counterValue:        cookPage.querySelector('.counter-value'),
            counterMinus:        cookPage.querySelector('.counter-btn:nth-child(1)'),
            counterPlus:         cookPage.querySelector('.counter-btn:nth-child(2)'),
            timeInput:           cookPage.querySelector('.input-with-icon[type="time"]'),
            notesTextarea:       cookPage.querySelector('textarea.input'),
            allergensCheckboxes: cookPage.querySelectorAll('.allergen-item input[type="checkbox"]'),
            saveBtn:             cookPage.querySelector('.btn-save'),
            clearBtn:            cookPage.querySelector('.btn-clear'),
            listingsContainer:   cookPage.querySelector('#listingsContainer'),
            listingsCount:       cookPage.querySelector('#listingsCount'),
            requestsList:        cookPage.querySelector('#requestsListContainer'),
            requestsBadge:       cookPage.querySelector('#requestsBadgeCount'),
            viewAllLink:         cookPage.querySelector('#viewAllRequestsLink'),
        };
    }

    // ===== UTILITY FUNCTIONS =====
    function generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }

    function getSelectedAllergens(DOM) {
        return Array.from(DOM.allergensCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
    }

    function getAllergenLabels() {
        return {
            'gluten': 'Gluten', 'milk': 'Milk', 'eggs': 'Eggs',
            'fish': 'Fish', 'peanuts': 'Peanuts', 'soybeans': 'Soybeans',
            'tree-nuts': 'Tree Nuts', 'sesame': 'Sesame', 'celery': 'Celery',
            'mustard': 'Mustard', 'sulfites': 'Sulfites', 'lupin': 'Lupin',
            'molluscs': 'Molluscs', 'crustaceans': 'Crustaceans'
        };
    }

    function calculateExpiry(createdAt) {
        const created = new Date(createdAt);
        const expiry = new Date(created.getTime() + 48 * 60 * 60 * 1000);
        const now = new Date();
        const diff = expiry - now;
        if (diff <= 0) return { expired: true, text: 'Έληξε' };
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return { expired: false, text: hours > 0 ? `Λήγει σε ${hours} ώρες` : `Λήγει σε ${minutes} λεπτά` };
    }

    function getStatus(listing) {
        const now = new Date();
        const created = new Date(listing.createdAt);
        const expiryTime = new Date(created.getTime() + 48 * 60 * 60 * 1000);
        if (now >= expiryTime) return 'inactive';
        if (listing.available_portions <= 0) return 'completed';
        return 'active';
    }

    // ===== FORM FUNCTIONS =====
    function clearForm(DOM) {
        if (DOM.titleInput) DOM.titleInput.value = '';
        if (DOM.locationInput) DOM.locationInput.value = '';
        if (DOM.counterValue) DOM.counterValue.textContent = '1';
        if (DOM.timeInput) DOM.timeInput.value = '';
        if (DOM.notesTextarea) DOM.notesTextarea.value = '';
        if (DOM.allergensCheckboxes) DOM.allergensCheckboxes.forEach(cb => cb.checked = false);
        window.appData.editingId = null;
        if (DOM.saveBtn) DOM.saveBtn.textContent = 'Αποθήκευση';
    }

    function populateForm(DOM, listing) {
        if (DOM.titleInput) DOM.titleInput.value = listing.title;
        if (DOM.locationInput) DOM.locationInput.value = listing.pickup_location;
        if (DOM.counterValue) DOM.counterValue.textContent = listing.total_portions;
        if (DOM.timeInput) DOM.timeInput.value = listing.pickup_time;
        if (DOM.notesTextarea) DOM.notesTextarea.value = listing.notes || '';
        if (DOM.allergensCheckboxes) {
            DOM.allergensCheckboxes.forEach(cb => {
                cb.checked = listing.allergens && listing.allergens.includes(cb.value);
            });
        }
        window.appData.editingId = listing.listing_id;
        if (DOM.saveBtn) DOM.saveBtn.textContent = 'Ενημέρωση';
        // Scroll to form
        const formPanel = document.querySelector('#page-cook .form-panel');
        if (formPanel) formPanel.scrollIntoView({ behavior: 'smooth' });
    }

    function getFormData(DOM) {
        return {
            title: DOM.titleInput ? DOM.titleInput.value.trim() : '',
            total_portions: parseInt(DOM.counterValue ? DOM.counterValue.textContent : 1),
            available_portions: parseInt(DOM.counterValue ? DOM.counterValue.textContent : 1),
            pickup_location: DOM.locationInput ? DOM.locationInput.value.trim() : '',
            pickup_time: DOM.timeInput ? DOM.timeInput.value : '',
            allergens: getSelectedAllergens(DOM),
            notes: DOM.notesTextarea ? DOM.notesTextarea.value.trim() : '',
            image_path: null,
            createdAt: new Date().toISOString(),
            status: 'active'
        };
    }

    // ===== COUNTER =====
    function updateCounter(DOM, delta) {
        if (!DOM.counterValue) return;
        let current = parseInt(DOM.counterValue.textContent);
        current = Math.max(1, Math.min(20, current + delta));
        DOM.counterValue.textContent = current;
    }

    // ===== LISTING RENDER =====
    function createListingCard(listing) {
        const status = getStatus(listing);
        const expiry = calculateExpiry(listing.createdAt);
        const allergenLabels = getAllergenLabels();
        listing.status = status;

        let statusBadge = '';
        if (status === 'active') statusBadge = '<span class="status-badge status-active">Ενεργή</span>';
        else if (status === 'completed') statusBadge = '<span class="status-badge status-completed">Ολοκληρώθηκε</span>';
        else statusBadge = '<span class="status-badge status-inactive">Ανενεργή</span>';

        let expiryHTML = '';
        if (status === 'active') {
            expiryHTML = `
                <div class="expiry-badge ${expiry.expired ? 'expired' : ''}">
                    <svg class="expiry-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span class="expiry-text" data-listing-id="${listing.listing_id}">${expiry.text}</span>
                </div>`;
        }

        const maxVisible = 3;
        const allergenTags = listing.allergens.slice(0, maxVisible)
            .map(a => `<span class="tag-badge">${allergenLabels[a] || a}</span>`).join('');
        const extraCount = listing.allergens.length - maxVisible;
        const extraTag = extraCount > 0 ? `<span class="tag-badge tag-more">+${extraCount}</span>` : '';

        let portionsText = listing.available_portions === 0
            ? '0 μερίδες'
            : `${listing.available_portions} μερίδες διαθέσιμες από ${listing.total_portions}`;

        const card = document.createElement('div');
        card.className = 'listing-card';
        card.setAttribute('data-listing-id', listing.listing_id);
        card.innerHTML = `
            <div class="thumbnail-container">
                <div class="listing-thumbnail">
                    ${listing.image_path
                        ? `<img src="${listing.image_path}" alt="${listing.title}">`
                        : `<span style="font-size:2rem;">🍽️</span>`}
                </div>
                ${expiryHTML}
            </div>
            <div class="listing-main">
                <div class="listing-title-row">
                    <h3 class="listing-card-title">${listing.title}</h3>
                    ${statusBadge}
                </div>
                <div class="listing-meta">
                    <div class="meta-item">
                        <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                        <span>${listing.pickup_location}</span>
                    </div>
                    <div class="meta-item">
                        <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                        <span>${listing.pickup_time}</span>
                    </div>
                    <div class="meta-item qty-row">
                        <span>Ποσότητα: <span class="meta-qty">${portionsText}</span></span>
                    </div>
                </div>
                <div class="listing-tags">${allergenTags}${extraTag}</div>
            </div>
            <div class="listing-actions">
                <button class="opt-btn opt-edit edit-listing" title="Επεξεργασία">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
                <button class="opt-btn opt-delete delete-listing" title="Διαγραφή">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
                <button class="opt-btn opt-view-bottom view-listing" title="Προβολή">
                    <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </button>
            </div>`;
        return card;
    }

    function renderListings() {
        const DOM = getDOM();
        if (!DOM || !DOM.listingsContainer) return;
        DOM.listingsContainer.innerHTML = '';
        window.appData.listings.forEach(listing => {
            DOM.listingsContainer.appendChild(createListingCard(listing));
        });
        if (DOM.listingsCount) DOM.listingsCount.textContent = window.appData.listings.length;
        attachListingEvents();
    }

    function attachListingEvents() {
        const cookPage = document.getElementById('page-cook');
        if (!cookPage) return;
        const DOM = getDOM();

        cookPage.querySelectorAll('.edit-listing').forEach(btn => {
            btn.onclick = function(e) {
                e.stopPropagation();
                const id = this.closest('.listing-card').getAttribute('data-listing-id');
                const listing = window.appData.listings.find(l => l.listing_id === id);
                if (listing) populateForm(DOM, listing);
            };
        });

        cookPage.querySelectorAll('.delete-listing').forEach(btn => {
            btn.onclick = function(e) {
                e.stopPropagation();
                const id = this.closest('.listing-card').getAttribute('data-listing-id');
                deleteListing(id);
            };
        });

        cookPage.querySelectorAll('.view-listing').forEach(btn => {
            btn.onclick = function(e) {
                e.stopPropagation();
                const id = this.closest('.listing-card').getAttribute('data-listing-id');
                const listing = window.appData.listings.find(l => l.listing_id === id);
                if (listing) showListingDetail(listing);
            };
        });
    }

    function saveListing() {
        const DOM = getDOM();
        if (!DOM) return;
        const formData = getFormData(DOM);

        if (!formData.title) { alert('Παρακαλώ συμπληρώστε τον τίτλο'); return; }
        if (!formData.pickup_location) { alert('Παρακαλώ συμπληρώστε την τοποθεσία'); return; }
        if (!formData.pickup_time) { alert('Παρακαλώ συμπληρώστε την ώρα παραλαβής'); return; }

        if (window.appData.editingId) {
            const index = window.appData.listings.findIndex(l => l.listing_id === window.appData.editingId);
            if (index !== -1) {
                const existing = window.appData.listings[index];
                if (formData.total_portions === existing.total_portions) {
                    formData.available_portions = existing.available_portions;
                } else {
                    const diff = formData.total_portions - existing.total_portions;
                    formData.available_portions = Math.min(
                        Math.max(0, existing.available_portions + diff),
                        formData.total_portions
                    );
                }
                window.appData.listings[index] = {
                    ...existing, ...formData,
                    listing_id: existing.listing_id,
                    createdAt: existing.createdAt,
                    image_path: existing.image_path
                };
            }
        } else {
            window.appData.listings.unshift({
                listing_id: generateId(),
                ...formData
            });
        }

        clearForm(DOM);
        renderListings();
    }

    function deleteListing(listingId) {
        if (!confirm('Είστε σίγουροι ότι θέλετε να διαγράψετε αυτή την αγγελία;')) return;
        window.appData.listings = window.appData.listings.filter(l => l.listing_id !== listingId);
        renderListings();
    }

    function showListingDetail(listing) {
        const allergenLabels = getAllergenLabels();
        let allergensHTML = '';
        if (listing.allergens && listing.allergens.length > 0) {
            allergensHTML = `<div style="margin:10px 0;"><strong>Αλλεργιογόνα:</strong><div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:5px;">${
                listing.allergens.map(a => `<span style="background:#f3f4f6;padding:4px 8px;border-radius:12px;font-size:0.85rem;">${allergenLabels[a] || a}</span>`).join('')
            }</div></div>`;
        }
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;';
        overlay.innerHTML = `
            <div style="background:white;border-radius:16px;padding:2rem;max-width:500px;width:90%;max-height:80vh;overflow-y:auto;">
                <h3 style="margin-bottom:1rem;">${listing.title}</h3>
                ${listing.image_path ? `<img src="${listing.image_path}" style="width:100%;border-radius:8px;margin-bottom:1rem;">` : '<div style="width:100%;height:200px;background:#f3f4f6;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:3rem;margin-bottom:1rem;">🍽️</div>'}
                <div style="margin:10px 0;"><strong>📍 Τοποθεσία:</strong> ${listing.pickup_location}</div>
                <div style="margin:10px 0;"><strong>🕐 Ώρα παραλαβής:</strong> ${listing.pickup_time}</div>
                <div style="margin:10px 0;"><strong>🍽️ Μερίδες:</strong> ${listing.available_portions}/${listing.total_portions} διαθέσιμες</div>
                ${allergensHTML}
                ${listing.notes ? `<div style="margin:10px 0;"><strong>📝 Σημειώσεις:</strong> ${listing.notes}</div>` : ''}
                <button id="closeDetailBtn" style="margin-top:1rem;padding:0.6rem 1.2rem;background:#7c3aed;color:white;border:none;border-radius:8px;cursor:pointer;font-weight:600;width:100%;">Κλείσιμο</button>
            </div>`;
        overlay.querySelector('#closeDetailBtn').onclick = () => overlay.remove();
        overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
        document.body.appendChild(overlay);
    }

    // ===== REQUESTS RENDER =====
    function createRequestCard(request, listing) {
        const now = new Date();
        const requestedAt = new Date(request.requested_at);
        const diffMinutes = Math.floor((now - requestedAt) / (1000 * 60));
        let timeText;
        if (diffMinutes < 1) {
            timeText = 'Μόλις τώρα';
        } else if (diffMinutes < 60) {
            timeText = `Πριν ${diffMinutes} λεπτά`;
        } else {
            const hours = Math.floor(diffMinutes / 60);
            timeText = `Πριν ${hours} ώρα${hours > 1 ? 'ες' : ''}`;
        }

        const initials = request.requester_name.split(' ').map(n => n[0]).join('').toUpperCase();
        const avatarBg = request.avatarColor || '#7c3aed';

        // Υπολογισμός φωτεινότερου χρώματος για το shadow του avatar
        const avatarShadow = avatarBg + '40';

        const card = document.createElement('div');
        card.className = 'request-card';
        card.setAttribute('data-request-id', request.request_id);
        card.innerHTML = `
            <div class="request-profile">
                <div class="user-avatar" style="background: ${avatarBg}; box-shadow: 0 4px 10px ${avatarShadow};">
                    ${initials}
                </div>
                <div class="user-meta">
                    <span class="user-name">${request.requester_name}</span>
                    <span class="request-time" data-request-id="${request.request_id}">
                        <svg class="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${timeText}
                    </span>
                </div>
            </div>
            <div class="request-details">
                <div class="request-target">
                    <span class="details-label">ΑΓΓΕΛΙΑ</span>
                    <span class="details-value">${listing ? listing.title : 'Άγνωστη'}</span>
                </div>
                <div class="request-qty">
                    <span class="details-label">ΖΗΤΗΜΕΝΕΣ ΜΕΡΙΔΕΣ</span>
                    <span class="portions-badge">${request.requested_portions} μερίδα${request.requested_portions > 1 ? 'ες' : ''}</span>
                </div>
            </div>
            <div class="request-actions">
                ${request.status === 'pending' ? `
                    <button class="btn-req btn-accept accept-request" title="Αποδοχή">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                            <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>Αποδοχή</span>
                    </button>
                    <button class="btn-req btn-reject reject-request" title="Απόρριψη">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                        <span>Απόρριψη</span>
                    </button>
                ` : `
                    <span style="padding:0.5rem 1rem; font-weight:600; color:${
                        request.status === 'approved'  ? '#15803d' :
                        request.status === 'rejected'  ? '#b91c1c' : '#64748b'
                    };">
                        ${request.status === 'approved'  ? '✓ Αποδεκτή' :
                          request.status === 'rejected'  ? '✗ Απορρίφθηκε' : request.status}
                    </span>
                    ${request.status === 'approved' ? `
                        <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
                            <button class="btn-req btn-accept received-request" style="font-size:0.75rem; padding:0.4rem 0.8rem;">
                                ✔ Παρέλαβε
                            </button>
                            <button class="btn-req btn-reject not-received-request" style="font-size:0.75rem; padding:0.4rem 0.8rem;">
                                ✕ Δεν εμφανίστηκε
                            </button>
                        </div>
                    ` : ''}
                `}
            </div>`;
        return card;
    }


    function renderRequests() {
        const DOM = getDOM();
        if (!DOM || !DOM.requestsList) return;
        DOM.requestsList.innerHTML = '';

        const pending = window.appData.requests.filter(r => r.status === 'pending');
        const visible = pending.slice(0, window.appData.currentPage * window.appData.requestsPerPage);

        visible.forEach(req => {
            const listing = window.appData.listings.find(l => l.listing_id === req.listing_id);
            DOM.requestsList.appendChild(createRequestCard(req, listing));
        });

        if (DOM.requestsBadge) DOM.requestsBadge.textContent = pending.length;
        if (DOM.viewAllLink) {
            DOM.viewAllLink.style.display = pending.length > visible.length ? 'inline-block' : 'none';
        }

        attachRequestEvents();
    }

    function attachRequestEvents() {
        const cookPage = document.getElementById('page-cook');
        if (!cookPage) return;

        cookPage.querySelectorAll('.accept-request').forEach(btn => {
            btn.onclick = function(e) { e.stopPropagation(); handleRequestAction(this.closest('.request-card').getAttribute('data-request-id'), 'approved'); };
        });
        cookPage.querySelectorAll('.reject-request').forEach(btn => {
            btn.onclick = function(e) { e.stopPropagation(); handleRequestAction(this.closest('.request-card').getAttribute('data-request-id'), 'rejected'); };
        });
        cookPage.querySelectorAll('.received-request').forEach(btn => {
            btn.onclick = function(e) { e.stopPropagation(); handleRequestAction(this.closest('.request-card').getAttribute('data-request-id'), 'received'); };
        });
        cookPage.querySelectorAll('.not-received-request').forEach(btn => {
            btn.onclick = function(e) { e.stopPropagation(); handleRequestAction(this.closest('.request-card').getAttribute('data-request-id'), 'not_received'); };
        });
    }

    function handleRequestAction(requestId, action) {
        const request = window.appData.requests.find(r => r.request_id === requestId);
        if (!request) return;
        const listing = window.appData.listings.find(l => l.listing_id === request.listing_id);

        if (action === 'approved') {
            if (listing && listing.available_portions >= request.requested_portions) {
                listing.available_portions -= request.requested_portions;
                request.status = 'approved';
                request.approved_at = new Date().toISOString();
                if (listing.available_portions === 0) listing.status = 'completed';
                renderListings();
            } else {
                alert('Δεν υπάρχουν αρκετές διαθέσιμες μερίδες!');
                return;
            }
        } else if (action === 'rejected') {
            request.status = 'rejected';
        } else if (action === 'received') {
            request.status = 'received';
            request.received_at = new Date().toISOString();
        } else if (action === 'not_received') {
            request.status = 'not_received';
        }

        renderRequests();
    }

    // ===== INITIAL MOCK DATA =====
    function loadInitialData() {
        window.appData.listings = [
            { listing_id: 'listing1', title: 'Μακαρόνια με κιμά',                title_short: 'Μακαρόνια με κιμά',                total_portions: 6, available_portions: 4, pickup_location: 'Κέντρο, Πάτρα',  pickup_time: '18:30', allergens: ['gluten','milk','eggs','celery','sulfites'], notes: 'Σπιτικά μακαρόνια με φρέσκο κιμά',        image_path: 'bolognese.png', createdAt: new Date(Date.now() - 16 * 3600000).toISOString(), status: 'active'    },
            { listing_id: 'listing3', title: 'Σπετζοφάι παραδοσιακό',            title_short: 'Σπετζοφάι παραδοσιακό',            total_portions: 3, available_portions: 2, pickup_location: 'Ψαροφάι, Πάτρα', pickup_time: '20:15', allergens: ['sulfites','mustard'],                          notes: 'Παραδοσιακό σπετζοφάι από τον Πήλιο', image_path: 'spetzofai.png', createdAt: new Date(Date.now() -  3 * 3600000).toISOString(), status: 'active'    },
            { listing_id: 'listing2', title: 'Φασολάκια φρέσκα λαδερά',         title_short: 'Φασολάκια φρέσκα λαδερά',         total_portions: 3, available_portions: 0, pickup_location: 'Αγία Σοφία',      pickup_time: '14:15', allergens: ['celery'],                                      notes: '',                                            image_path: 'fasolakia.png', createdAt: new Date(Date.now() - 24 * 3600000).toISOString(), status: 'completed' },
            { listing_id: 'listing4', title: 'Κοτόπουλο στο φούρνο με πατάτες', title_short: 'Κοτόπουλο στο φούρνο με πατάτες', total_portions: 4, available_portions: 1, pickup_location: 'Ρίο, Πάτρα',      pickup_time: '15:30', allergens: ['gluten','mustard'],                            notes: '',                                            image_path: 'kotopoulo.png', createdAt: new Date(Date.now() - 50 * 3600000).toISOString(), status: 'inactive'  }
        ];
        window.appData.requests = [
            { request_id: 'req1', listing_id: 'listing1', requester_name: 'Μαρία Κ.',   requested_portions: 1, status: 'pending', requested_at: new Date(Date.now() - 59 * 60000).toISOString(), avatarColor: '#7c3aed' },
            { request_id: 'req2', listing_id: 'listing1', requester_name: 'Γιώργος Τ.', requested_portions: 2, status: 'pending', requested_at: new Date(Date.now() - 1   * 3600000).toISOString(), avatarColor: '#10b981' },
            { request_id: 'req3', listing_id: 'listing3', requester_name: 'Ελένη Π.',   requested_portions: 1, status: 'pending', requested_at: new Date(Date.now() - 2   * 3600000).toISOString(), avatarColor: '#f59e0b' }
        ];
    }

    // ===== SETUP EVENT LISTENERS =====
    function setupEventListeners(DOM) {
        if (DOM.counterMinus) DOM.counterMinus.onclick = () => updateCounter(DOM, -1);
        if (DOM.counterPlus)  DOM.counterPlus.onclick  = () => updateCounter(DOM, 1);
        if (DOM.saveBtn)  DOM.saveBtn.onclick  = (e) => { e.preventDefault(); saveListing(); };
        if (DOM.clearBtn) DOM.clearBtn.onclick = (e) => { e.preventDefault(); clearForm(DOM); };
        if (DOM.viewAllLink) {
            DOM.viewAllLink.onclick = (e) => {
                e.preventDefault();
                window.appData.currentPage++;
                renderRequests();
            };
        }
        if (DOM.uploadBox) {
            DOM.uploadBox.onclick = () => alert('Λειτουργία μεταφόρτωσης φωτογραφίας — θα υλοποιηθεί με server');
        }
    }

    // ===== PUBLIC: καλείται από το window.js όταν ανοίγει η σελίδα chef =====
    window.initCookPage = function() {
        if (!window.appData.initialized) {
            loadInitialData();
            window.appData.initialized = true;
        }
        const DOM = getDOM();
        if (!DOM) return;
        setupEventListeners(DOM);
        renderListings();
        renderRequests();
    };

    

// Accordion για τις Συχνές Ερωτήσεις (global function)
window.toggleFAQ = function(questionEl) {
    var item = questionEl.parentElement;
    var isOpen = item.classList.contains('active');

    // Κλείσιμο όλων των ανοιχτών ερωτήσεων
    var allItems = document.querySelectorAll('.faq-item');
    for (var i = 0; i < allItems.length; i++) {
        allItems[i].classList.remove('active');
        var arrow = allItems[i].querySelector('.faq-arrow');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    }

    // Αν δεν ήταν ήδη ανοιχτό, το ανοίγουμε
    if (!isOpen) {
        item.classList.add('active');
        var arrow = questionEl.querySelector('.faq-arrow');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    }
};