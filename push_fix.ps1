# Jake Turner PT - Push Button Fix
# Run this from: G:\My Drive\PT Project\JakeTurner

Write-Host "Pushing Button Fix to GitHub..." -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan

# Ensure we are in the right directory
Set-Location "G:\My Drive\PT Project\JakeTurner"

# 1. Add files
Write-Host "[1/3] Adding files..." -ForegroundColor Yellow
git add .

# 2. Commit
Write-Host "[2/3] Committing..." -ForegroundColor Yellow
git commit -m "Fix: Add asChild support to Button component"

# 3. Push
Write-Host "[3/3] Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Fix pushed successfully!" -ForegroundColor Green
    Write-Host "Netlify should now redeploy automatically." -ForegroundColor White
}
else {
    Write-Host ""
    Write-Host "❌ Push failed." -ForegroundColor Red
}
