# Deploy or update the MATstudio site on GitHub Pages.
# Assumes `gh` is authenticated (already configured in this workspace).

$ErrorActionPreference = "Stop"

npm run build

$tmp = Join-Path $env:TEMP "matstudio-gh-pages"
Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
Copy-Item -Path "$PSScriptRoot\dist" -Destination $tmp -Recurse

Set-Location $tmp
git init
git remote add origin https://github.com/Codefanfun/matstudio-site.git 2>&1 | Out-Null
git config user.name "Codefanfun"
git config user.email "matstudio@localhost"
git checkout -b gh-pages 2>&1 | Out-Null
git add .
git commit -m "Update MATstudio GitHub Pages" 2>&1 | Out-Null
git push -f origin gh-pages

Set-Location $PSScriptRoot
Write-Host "Deployed to https://codefanfun.github.io/matstudio-site/" -ForegroundColor Green
