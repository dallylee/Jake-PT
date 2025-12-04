# Jake Turner PT - Deployment Script
# Run this from: G:\My Drive\PT Project\JakeTurner

Write-Host "Jake Turner PT - Netlify Deployment Script" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install dependencies
Write-Host "[1/5] Installing dependencies..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: npm install failed. Please check your internet connection." -ForegroundColor Red
    exit 1
}

# Step 2: Test build
Write-Host "[2/5] Testing build..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error: Build failed. Please check the error messages above." -ForegroundColor Red
    exit 1
}

# Step 3: Initialize Git
Write-Host "[3/5] Initializing Git..." -ForegroundColor Yellow
git init
git add .
git commit -m "Initial commit: Jake Turner PT landing page"
git branch -M main

# Step 4: Create GitHub repo and push
Write-Host "[4/5] Creating GitHub repository..." -ForegroundColor Yellow
gh repo create jake-turner-pt-landing --private --source=. --remote=origin --push

# Step 5: Instructions
Write-Host ""
Write-Host "[5/5] Deployment to GitHub complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://app.netlify.com" -ForegroundColor White
Write-Host "2. Click 'Add new site' -> 'Import an existing project'" -ForegroundColor White
Write-Host "3. Choose GitHub and select 'jake-turner-pt-landing'" -ForegroundColor White
Write-Host "4. Netlify will auto-detect Next.js settings" -ForegroundColor White
Write-Host "5. Click 'Deploy'" -ForegroundColor White
Write-Host ""
Write-Host "Every future push to GitHub will automatically deploy to Netlify!" -ForegroundColor Green
