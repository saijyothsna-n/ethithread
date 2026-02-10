# EthiThread - Complete Testing Checklist

## 🔐 Authentication & Login

### Login Screen
- [ ] **Login Form Display**
  - [ ] Login form appears on initial page load
  - [ ] Email input field is visible and functional
  - [ ] Password input field is visible and functional
  - [ ] "Sign In" button is visible and enabled
  - [ ] Demo account information is displayed

- [ ] **Email Validation**
  - [ ] Empty email shows error: "Email is required"
  - [ ] Invalid email format (e.g., "test@") shows error: "Please enter a valid email address"
  - [ ] Valid email format (e.g., "test@example.com") shows no error
  - [ ] Error message appears below email field with red styling
  - [ ] Error icon appears next to error message

- [ ] **Password Validation**
  - [ ] Empty password shows error: "Password is required"
  - [ ] Password less than 4 characters shows error: "Password must be at least 4 characters"
  - [ ] Valid password (4+ characters) shows no error
  - [ ] Error message appears below password field with red styling
  - [ ] Error icon appears next to error message

- [ ] **Form Submission**
  - [ ] Clicking "Sign In" with invalid credentials shows error: "Invalid email or password"
  - [ ] Error message appears in red alert box
  - [ ] Login button shows loading spinner during login attempt
  - [ ] Login button text changes to "Signing In..." during login
  - [ ] Login button is disabled during login process

- [ ] **Successful Login**
  - [ ] Login with `leo@fashion.edu` / `demo123` (Student account) works
  - [ ] Login with `sarah@boutique.com` / `demo123` (Boutique account) works
  - [ ] After successful login, user is redirected to main app
  - [ ] User name and type are displayed in header
  - [ ] Login screen is hidden after successful login

- [ ] **Loading States**
  - [ ] Loading spinner appears during login
  - [ ] Button is disabled during login
  - [ ] Form fields are disabled during login

---

## 🧭 Navigation & Header

### Header Display
- [ ] **Header Elements**
  - [ ] EthiThread logo and title are visible
  - [ ] User name is displayed correctly
  - [ ] User type (student/boutique) is displayed correctly
  - [ ] Logout button is visible

- [ ] **Navigation Tabs**
  - [ ] "Discover" tab is visible and clickable
  - [ ] "Suppliers" tab is visible and clickable
  - [ ] "Saved" tab is visible and clickable
  - [ ] Active tab is highlighted in green
  - [ ] Active tab has green underline border
  - [ ] Saved tab shows badge with count when fabrics are saved

- [ ] **Tab Navigation**
  - [ ] Clicking "Discover" tab switches to Discover view
  - [ ] Clicking "Suppliers" tab switches to Suppliers view
  - [ ] Clicking "Saved" tab switches to Saved Fabrics view
  - [ ] Tab highlighting updates correctly when switching tabs

- [ ] **Logout Button**
  - [ ] Logout button is clickable
  - [ ] Clicking logout returns to login screen
  - [ ] User data is cleared after logout
  - [ ] Saved fabrics are cleared after logout

---

## 📤 Image Upload & Analysis

### Upload Section
- [ ] **Upload Interface**
  - [ ] Upload section is visible on Discover tab
  - [ ] "Upload Your Mood Board" heading is displayed
  - [ ] Instructions text is visible
  - [ ] Upload button/area is visible
  - [ ] Filters button is visible

- [ ] **Image Upload - Valid Files**
  - [ ] Can upload JPEG image (.jpg, .jpeg)
  - [ ] Can upload PNG image (.png)
  - [ ] Can upload WebP image (.webp)
  - [ ] Can upload GIF image (.gif)
  - [ ] Uploaded images appear in grid
  - [ ] Can upload multiple images at once
  - [ ] Maximum 5 images can be uploaded
  - [ ] Upload button shows loading state during upload

- [ ] **Image Upload - Invalid Files**
  - [ ] Uploading non-image file (e.g., .pdf, .txt) shows error
  - [ ] Error message: "Please upload a valid image file (JPEG, PNG, WebP, or GIF)"
  - [ ] Uploading file larger than 5MB shows error
  - [ ] Error message: "Image size must be less than 5MB"
  - [ ] Error message appears in red alert box with icon
  - [ ] Invalid files are not added to upload grid

- [ ] **Image Upload - Limits**
  - [ ] Can upload up to 5 images
  - [ ] Upload button disappears after 5 images are uploaded
  - [ ] Attempting to upload 6th image shows error
  - [ ] Error message: "You can only upload up to 5 images"
  - [ ] Uploading when already at limit shows appropriate error

- [ ] **Remove Images**
  - [ ] X button appears on each uploaded image
  - [ ] Clicking X removes that specific image
  - [ ] Upload button reappears after removing image
  - [ ] Can remove images in any order
  - [ ] Removing all images clears the grid

- [ ] **Analyze Button**
  - [ ] "Find Sustainable Fabrics" button is visible
  - [ ] Button is disabled when no images are uploaded
  - [ ] Button is enabled when images are uploaded
  - [ ] Button is disabled during analysis
  - [ ] Button text changes to "Analyzing Your Vision..." during analysis
  - [ ] Button shows loading spinner during analysis

---

## 🔍 Filters

### Filter Panel
- [ ] **Filter Toggle**
  - [ ] Filters button is clickable
  - [ ] Clicking Filters button opens/closes filter panel
  - [ ] Chevron icon rotates when opening/closing
  - [ ] Filter panel appears below Filters button

- [ ] **Water Usage Filter**
  - [ ] Water Usage dropdown is visible
  - [ ] Default value is "All"
  - [ ] Can select "Low Only"
  - [ ] Can select "Medium or Better"
  - [ ] Filter applies correctly to search results

- [ ] **CO₂ Score Filter**
  - [ ] CO₂ Score dropdown is visible
  - [ ] Default value is "All Grades"
  - [ ] Can select "Grade A Only"
  - [ ] Can select "Grade B or Better"
  - [ ] Filter applies correctly to search results

- [ ] **Certification Filter**
  - [ ] Certification dropdown is visible
  - [ ] Default value is "All"
  - [ ] Can select "GOTS"
  - [ ] Can select "OEKO-TEX"
  - [ ] Can select "GRS"
  - [ ] Filter applies correctly to search results

- [ ] **Price Filter**
  - [ ] Price slider is visible
  - [ ] Default value is $50/m
  - [ ] Can adjust slider from $10 to $50
  - [ ] Price value updates as slider moves
  - [ ] Filter applies correctly to search results

- [ ] **Filter Combinations**
  - [ ] Multiple filters can be applied simultaneously
  - [ ] Results respect all active filters
  - [ ] Filters persist when switching tabs and returning
  - [ ] Filters are saved to localStorage

---

## 🤖 AI Analysis & Matching

### Analysis Process
- [ ] **Analysis Trigger**
  - [ ] Clicking "Find Sustainable Fabrics" starts analysis
  - [ ] Analysis begins only when images are uploaded
  - [ ] Analysis cannot be triggered without images

- [ ] **Loading State**
  - [ ] Loading spinner appears during analysis
  - [ ] "Analyzing visual aesthetics and sustainability..." message is displayed
  - [ ] "Matching against 8 verified suppliers" message is displayed
  - [ ] Loading state is visible and centered

- [ ] **Analysis Results**
  - [ ] Results appear after ~2.5 seconds
  - [ ] "Top Fabric Matches" heading is displayed
  - [ ] Number of matches found is displayed
  - [ ] Fabric cards are displayed in grid (up to 6 results)
  - [ ] Results are sorted by match score (highest first)
  - [ ] Match scores are displayed on each fabric card

- [ ] **Error Handling**
  - [ ] If no fabrics match filters, error message appears
  - [ ] Error message: "No fabrics match your current filters. Try adjusting your filter settings."
  - [ ] Error appears in red alert box with icon
  - [ ] Error is cleared when new analysis is run

- [ ] **Filtered Results**
  - [ ] Results respect active filters
  - [ ] Only fabrics matching all filters are shown
  - [ ] Results update when filters change

---

## 🎴 Fabric Cards

### Card Display
- [ ] **Card Elements**
  - [ ] Fabric image is displayed
  - [ ] Fabric name is displayed
  - [ ] Fabric description is displayed (truncated to 2 lines)
  - [ ] Match score badge is visible (on Discover tab)
  - [ ] Save button (heart icon) is visible

- [ ] **Sustainability Metrics**
  - [ ] Water usage badge is displayed with liters/meter
  - [ ] CO₂ impact badge is displayed with kg CO₂
  - [ ] Certifications are displayed as badges
  - [ ] Badge colors are correct (green for low water, etc.)

- [ ] **Technical Details**
  - [ ] Composition is displayed
  - [ ] Weight is displayed
  - [ ] Price per meter is displayed
  - [ ] Minimum order quantity is displayed
  - [ ] Supplier rating is displayed with star icon

- [ ] **Action Buttons**
  - [ ] "Request Swatch" button is visible
  - [ ] "Select to Compare" button is visible
  - [ ] Buttons are clickable

### Save Functionality
- [ ] **Save Fabric**
  - [ ] Heart icon is visible on each fabric card
  - [ ] Clicking heart icon saves fabric
  - [ ] Heart icon turns red when saved
  - [ ] Heart icon is filled when saved
  - [ ] Saved count in header updates
  - [ ] Fabric appears in Saved tab

- [ ] **Unsave Fabric**
  - [ ] Clicking red heart icon unsaves fabric
  - [ ] Heart icon returns to white/unfilled
  - [ ] Saved count in header decreases
  - [ ] Fabric is removed from Saved tab

### Selection for Comparison
- [ ] **Select Fabric**
  - [ ] Clicking "Select to Compare" selects fabric
  - [ ] Selected fabric card has green border
  - [ ] Button text changes to "✓ Selected for Comparison"
  - [ ] Can select up to 2 fabrics
  - [ ] Selecting 3rd fabric replaces 1st selection

- [ ] **Deselect Fabric**
  - [ ] Clicking "✓ Selected for Comparison" deselects fabric
  - [ ] Green border is removed
  - [ ] Button text returns to "Select to Compare"

- [ ] **Comparison Button**
  - [ ] "Show Comparison" button appears when 2 fabrics are selected
  - [ ] Button is visible in results section header
  - [ ] Button toggles comparison view

---

## 🔄 Comparison Feature

### Comparison Display
- [ ] **Comparison Section**
  - [ ] Comparison section appears when "Show Comparison" is clicked
  - [ ] Section title "Side-by-Side Comparison" is displayed
  - [ ] Two fabric cards are displayed side by side
  - [ ] Each fabric shows its image

- [ ] **Comparison Details**
  - [ ] Match score is displayed for each fabric
  - [ ] Water usage is displayed with badge
  - [ ] CO₂ impact is displayed with badge
  - [ ] Price per meter is displayed
  - [ ] Minimum order is displayed
  - [ ] Delivery days is displayed
  - [ ] Supplier rating is displayed

- [ ] **Comparison Toggle**
  - [ ] "Hide Comparison" button hides comparison section
  - [ ] "Show Comparison" button shows comparison section
  - [ ] Button text toggles correctly

---

## 💾 Saved Fabrics Tab

### Saved Tab Display
- [ ] **Tab Navigation**
  - [ ] Clicking "Saved" tab switches to Saved view
  - [ ] Tab is highlighted when active
  - [ ] Badge count is visible on tab

- [ ] **Empty State**
  - [ ] Empty state is shown when no fabrics are saved
  - [ ] Heart icon is displayed
  - [ ] "Start saving fabrics from the Discover tab" message is shown
  - [ ] "Discover Fabrics" button is visible
  - [ ] Button navigates to Discover tab

- [ ] **Saved Fabrics Display**
  - [ ] Saved fabrics are displayed in grid
  - [ ] Count message shows correct number: "You have X fabric(s) saved"
  - [ ] All saved fabrics are visible
  - [ ] Fabric cards show all details
  - [ ] Match score is NOT shown on saved fabrics
  - [ ] Heart icon is red/filled on saved fabrics

- [ ] **Saved Fabric Actions**
  - [ ] Can unsave fabrics from Saved tab
  - [ ] Can select saved fabrics for comparison
  - [ ] Can request swatch from saved fabrics
  - [ ] Removing fabric from saved updates count

---

## 🏢 Suppliers Tab

### Suppliers Display
- [ ] **Tab Navigation**
  - [ ] Clicking "Suppliers" tab switches to Suppliers view
  - [ ] Tab is highlighted when active

- [ ] **Suppliers List**
  - [ ] "Verified Sustainable Suppliers" heading is displayed
  - [ ] Description text is visible
  - [ ] All 8 suppliers are displayed
  - [ ] Each supplier appears in a card

- [ ] **Supplier Card Elements**
  - [ ] Supplier name is displayed
  - [ ] Verified badge (award icon) is visible for verified suppliers
  - [ ] Country/location is displayed with map pin icon
  - [ ] Rating is displayed with star icon
  - [ ] Years active is displayed
  - [ ] Email is displayed with mail icon
  - [ ] Phone number is displayed with phone icon
  - [ ] "View Full Profile" button is visible

- [ ] **Supplier Card Interactions**
  - [ ] "View Full Profile" button is clickable
  - [ ] Button has hover effect

---

## 🛒 Swatch Request

### Swatch Modal
- [ ] **Modal Trigger**
  - [ ] Clicking "Request Swatch" opens modal
  - [ ] Modal appears as overlay
  - [ ] Background is dimmed

- [ ] **Modal Display**
  - [ ] Success checkmark icon is visible
  - [ ] "Swatch Request Sent!" heading is displayed
  - [ ] Confirmation message mentions fabric name and supplier
  - [ ] Close (X) button is visible in top right

- [ ] **Modal Details**
  - [ ] Supplier name is displayed
  - [ ] Supplier location is displayed
  - [ ] Estimated delivery days is displayed
  - [ ] Sample size (10cm × 10cm) is displayed
  - [ ] Sample cost (Free) is displayed in green
  - [ ] Info box with "What happens next?" is visible

- [ ] **Modal Interactions**
  - [ ] Clicking X button closes modal
  - [ ] Clicking outside modal closes modal
  - [ ] Clicking "Got it, thanks!" button closes modal
  - [ ] Modal closes correctly

---

## 💾 Data Persistence

### localStorage Functionality
- [ ] **User Session Persistence**
  - [ ] After login, refresh page - user remains logged in
  - [ ] User name and type are restored after refresh
  - [ ] User is not logged out on page refresh

- [ ] **Saved Fabrics Persistence**
  - [ ] Save a fabric, refresh page - fabric remains saved
  - [ ] Saved count is correct after refresh
  - [ ] Saved fabrics appear in Saved tab after refresh
  - [ ] Multiple saved fabrics persist correctly

- [ ] **Filter Persistence**
  - [ ] Set filters, refresh page - filters are restored
  - [ ] All filter values are preserved
  - [ ] Filters apply correctly after restoration

- [ ] **Logout Clears Data**
  - [ ] Logout clears user session
  - [ ] Logout clears saved fabrics
  - [ ] Logout clears filters
  - [ ] After logout, refresh shows login screen

---

## 📱 Mobile Responsiveness

### Mobile Layout (320px - 640px)
- [ ] **Login Screen**
  - [ ] Login form fits on mobile screen
  - [ ] Text is readable on mobile
  - [ ] Buttons are touch-friendly size
  - [ ] Demo account info is visible

- [ ] **Header**
  - [ ] Logo and title fit on mobile
  - [ ] User info is readable
  - [ ] Navigation tabs scroll horizontally
  - [ ] Tabs are touch-friendly
  - [ ] Badge count is visible

- [ ] **Upload Section**
  - [ ] Upload grid shows 2 columns on mobile
  - [ ] Images are properly sized
  - [ ] Filter panel stacks vertically
  - [ ] Buttons are full-width on mobile
  - [ ] Text is readable

- [ ] **Fabric Cards**
  - [ ] Cards stack vertically on mobile
  - [ ] Images are properly sized
  - [ ] Text is readable
  - [ ] Buttons are touch-friendly
  - [ ] Badges are visible

- [ ] **Comparison**
  - [ ] Comparison stacks vertically on mobile
  - [ ] All details are visible
  - [ ] Text is readable

- [ ] **Modals**
  - [ ] Modal fits on mobile screen
  - [ ] Modal is scrollable if needed
  - [ ] Close button is accessible
  - [ ] Text is readable

### Tablet Layout (641px - 1024px)
- [ ] **Layout Adapts**
  - [ ] Grid shows 2 columns for fabrics
  - [ ] Upload grid shows 3-4 columns
  - [ ] Comparison shows side-by-side
  - [ ] All elements are properly sized

### Desktop Layout (1025px+)
- [ ] **Layout Adapts**
  - [ ] Grid shows 3 columns for fabrics
  - [ ] Upload grid shows 5 columns
  - [ ] All elements use full width appropriately
  - [ ] Spacing is optimal

---

## 🎨 UI/UX Elements

### Visual Feedback
- [ ] **Hover States**
  - [ ] Buttons show hover effect
  - [ ] Links show hover effect
  - [ ] Cards show hover effect (if applicable)

- [ ] **Loading States**
  - [ ] Spinners are visible during loading
  - [ ] Loading text is displayed
  - [ ] Buttons show disabled state during loading

- [ ] **Error States**
  - [ ] Error messages are clearly visible
  - [ ] Error styling (red) is consistent
  - [ ] Error icons are displayed

- [ ] **Success States**
  - [ ] Success messages are clearly visible
  - [ ] Success styling (green) is consistent
  - [ ] Success icons are displayed

### Accessibility
- [ ] **Keyboard Navigation**
  - [ ] Can tab through form fields
  - [ ] Can submit form with Enter key
  - [ ] Can navigate tabs with keyboard
  - [ ] Focus indicators are visible

- [ ] **Screen Reader**
  - [ ] Images have alt text
  - [ ] Buttons have aria-labels
  - [ ] Form fields have labels

- [ ] **Color Contrast**
  - [ ] Text is readable on all backgrounds
  - [ ] Buttons have sufficient contrast
  - [ ] Error messages are readable

---

## 🔄 Edge Cases & Error Scenarios

### Error Handling
- [ ] **Network Errors**
  - [ ] App handles localStorage errors gracefully
  - [ ] Error messages are user-friendly
  - [ ] App doesn't crash on errors

- [ ] **Invalid Data**
  - [ ] Invalid email formats are rejected
  - [ ] Invalid file types are rejected
  - [ ] Oversized files are rejected

- [ ] **Empty States**
  - [ ] Empty upload state is handled
  - [ ] Empty search results are handled
  - [ ] Empty saved fabrics is handled

- [ ] **Boundary Conditions**
  - [ ] Maximum 5 images enforced
  - [ ] Maximum 2 fabrics for comparison enforced
  - [ ] Filter limits are enforced

---

## 🧪 Integration Testing

### User Flows
- [ ] **Complete Discovery Flow**
  1. Login → Upload images → Apply filters → Analyze → View results → Save fabric → Request swatch

- [ ] **Complete Comparison Flow**
  1. Login → Upload images → Analyze → Select 2 fabrics → View comparison → Close comparison

- [ ] **Complete Save Flow**
  1. Login → Upload images → Analyze → Save multiple fabrics → View Saved tab → Unsave fabric

- [ ] **Complete Persistence Flow**
  1. Login → Save fabrics → Set filters → Refresh page → Verify data persists

- [ ] **Complete Error Flow**
  1. Login → Upload invalid file → See error → Upload valid file → Success

---

## 📋 Quick Test Checklist (5-Minute Smoke Test)

- [ ] Can log in with demo account
- [ ] Can upload an image
- [ ] Can analyze images and see results
- [ ] Can save a fabric
- [ ] Can view saved fabrics
- [ ] Can request a swatch
- [ ] Can log out
- [ ] Data persists after refresh

---

## ✅ Final Verification

- [ ] All buttons are functional
- [ ] All forms validate correctly
- [ ] All errors are handled gracefully
- [ ] All data persists correctly
- [ ] App works on mobile, tablet, and desktop
- [ ] No console errors
- [ ] No visual glitches
- [ ] Performance is acceptable

---

**Total Test Items: 200+**

**Estimated Testing Time: 2-3 hours for complete coverage**

**Priority Testing:**
1. **Critical Path**: Login → Upload → Analyze → Save → Swatch Request
2. **Data Persistence**: Save → Refresh → Verify
3. **Error Handling**: Invalid inputs, edge cases
4. **Mobile Responsiveness**: Test on actual devices or browser dev tools
