# Folines Deployment

## Production

- Repository: `Sabertlili/folines.com`
- Host: GitHub Pages
- Source: `main` branch, repository root
- Custom domain: `folines.com`

## DNS

DNS is managed in Namecheap.

Required records are listed in `DNS_NAMECHEAP.md`.

## Verification

```powershell
Resolve-DnsName folines.com -Type A
Resolve-DnsName folines.com -Type AAAA
Resolve-DnsName www.folines.com
Invoke-WebRequest http://folines.com/ -UseBasicParsing
Invoke-WebRequest http://folines.com/llms.txt -UseBasicParsing
Invoke-WebRequest http://folines.com/.well-known/security.txt -UseBasicParsing
```

After GitHub Pages finishes certificate provisioning:

```powershell
Invoke-WebRequest https://folines.com/ -UseBasicParsing
```

