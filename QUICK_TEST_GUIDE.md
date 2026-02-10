# EthiThread - Quick Test Guide

## 🚀 5-Minute Smoke Test

1. **Login** → Use `leo@fashion.edu` / `demo123`
2. **Upload** → Add 2-3 images
3. **Analyze** → Click "Find Sustainable Fabrics"
4. **Save** → Click heart icon on a fabric
5. **Swatch** → Click "Request Swatch" on a fabric
6. **Refresh** → Verify data persists
7. **Logout** → Click logout button

---

## 📋 Feature Checklist (Quick Reference)

### Authentication
- [ ] Login with valid credentials
- [ ] Login with invalid credentials (error)
- [ ] Email validation (empty, invalid format)
- [ ] Password validation (empty, too short)
- [ ] Loading state during login
- [ ] Logout functionality

### Image Upload
- [ ] Upload valid images (JPEG, PNG, WebP, GIF)
- [ ] Upload invalid file type (error)
- [ ] Upload oversized file >5MB (error)
- [ ] Upload maximum 5 images
- [ ] Remove uploaded images
- [ ] Upload button disabled when no images

### Filters
- [ ] Toggle filters panel
- [ ] Water Usage filter (All, Low, Medium)
- [ ] CO₂ Score filter (All, A, B)
- [ ] Certification filter (All, GOTS, OEKO-TEX, GRS)
- [ ] Price slider ($10-$50)
- [ ] Multiple filters combined

### Analysis
- [ ] Start analysis with images
- [ ] Loading spinner appears
- [ ] Results appear after ~2.5s
- [ ] Results respect filters
- [ ] Error if no matches found

### Fabric Cards
- [ ] Display fabric image, name, description
- [ ] Show sustainability metrics (water, CO₂)
- [ ] Show certifications
- [ ] Show pricing and supplier info
- [ ] Save/unsave fabric (heart icon)
- [ ] Select for comparison
- [ ] Request swatch button

### Comparison
- [ ] Select 2 fabrics
- [ ] "Show Comparison" button appears
- [ ] Comparison displays side-by-side
- [ ] All metrics shown for both fabrics
- [ ] Hide comparison works

### Saved Fabrics Tab
- [ ] Navigate to Saved tab
- [ ] View saved fabrics
- [ ] Empty state when no saved fabrics
- [ ] Unsave from Saved tab
- [ ] Badge count updates

### Suppliers Tab
- [ ] Navigate to Suppliers tab
- [ ] View all 8 suppliers
- [ ] Supplier cards show all info
- [ ] Verified badge visible

### Swatch Request
- [ ] Click "Request Swatch"
- [ ] Modal opens
- [ ] Modal shows all details
- [ ] Close modal (X, button, outside click)

### Data Persistence
- [ ] Login persists after refresh
- [ ] Saved fabrics persist after refresh
- [ ] Filters persist after refresh
- [ ] Logout clears all data

### Mobile Responsiveness
- [ ] Test on mobile viewport (320px-640px)
- [ ] Test on tablet viewport (641px-1024px)
- [ ] Test on desktop viewport (1025px+)
- [ ] All elements readable and clickable
- [ ] Layout adapts correctly

### Error Handling
- [ ] Invalid login shows error
- [ ] Invalid file upload shows error
- [ ] No filter matches shows error
- [ ] All errors display clearly

---

## 🎯 Critical Path Testing

**Must Work:**
1. Login → Upload → Analyze → Results
2. Save fabric → View in Saved tab
3. Select 2 fabrics → Compare
4. Request swatch → Modal opens
5. Refresh page → Data persists

---

## 🐛 Common Issues to Check

- [ ] Buttons not clickable
- [ ] Forms not submitting
- [ ] Images not uploading
- [ ] Data not persisting
- [ ] Errors not displaying
- [ ] Mobile layout broken
- [ ] Console errors

---

## 📱 Device Testing

- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Desktop Edge

---

**Total Quick Tests: ~50 items**

**Time: 15-20 minutes for quick pass**
