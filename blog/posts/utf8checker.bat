try {
    Get-Content -Path "C:\testdata\KBSOFT Systems Inc\Website\OnePageSite\blog\posts\edi-security.md" -Encoding utf8 > $null
    "File can be read as UTF-8"
} catch {
    "File is NOT valid UTF-8"
}
