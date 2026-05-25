# release.ps1 — VeldWorks versie-bump + commit + push
# Gebruik: .\release.ps1 patch | minor | major
# Voorbeeld: .\release.ps1 minor

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("patch","minor","major")]
    [string]$bump
)

$versionFile = "$PSScriptRoot\VERSION"
$indexFile   = "$PSScriptRoot\index.html"

# Huidige versie inlezen
$current = (Get-Content $versionFile -Raw).Trim()
$parts = $current -split '\.'
$major = [int]$parts[0]
$minor = [int]$parts[1]
$patch = [int]$parts[2]

# Bumpen
switch ($bump) {
    "major" { $major++; $minor = 0; $patch = 0 }
    "minor" { $minor++; $patch = 0 }
    "patch" { $patch++ }
}

$new = "$major.$minor.$patch"

# VERSION bijwerken
Set-Content $versionFile "$new`n"

# index.html bijwerken
$html = Get-Content $indexFile -Raw
$html = $html -replace 'class="footer-version">v[\d\.]+<', "class=`"footer-version`">v$new<"
Set-Content $indexFile $html

Write-Host "Versie: $current → $new"

# Commit en push
git -C $PSScriptRoot add VERSION index.html
git -C $PSScriptRoot commit -m "Release v$new"
git -C $PSScriptRoot push origin master

Write-Host "Klaar — v$new is live."
