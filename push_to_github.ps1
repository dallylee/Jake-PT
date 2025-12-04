# Jake Turner PT - GitHub Push Script
# Run this from: G:\My Drive\PT Project\JakeTurner

$RepoUrl = "https://github.com/dallylee/Jake-PT.git"

Write-Host "Pushing to GitHub: $RepoUrl" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# Ensure we are in the right directory
Set-Location "G:\My Drive\PT Project\JakeTurner"

# 1. Initialize Git
Write-Host "[1/5] Initializing Git..." -ForegroundColor Yellow
if (-not (Test-Path ".git")) {
    git init
}

# 2. Add all files
Write-Host "[2/5] Adding files..." -ForegroundColor Yellow
git add .

# 3. Commit
Write-Host "[3/5] Committing..." -ForegroundColor Yellow
git commit -m "Initial commit: Jake Turner PT landing page with Netlify config"

# 4. Configure Remote
Write-Host "[4/5] Configuring remote..." -ForegroundColor Yellow
git branch -M main
# Remove origin if it exists to be safe
git remote remove origin 2>$null
git remote add origin $RepoUrl

# 5. Push
Write-Host "[5/5] Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Success! Your code is now on GitHub." -ForegroundColor Green
    Write-Host "View it here: https://github.com/dallylee/Jake-PT" -ForegroundColor White
}
else {
    Write-Host ""
    Write-Host "❌ Push failed. Please check your permissions or if the repo is empty." -ForegroundColor Red
}
