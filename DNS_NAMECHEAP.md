# Namecheap DNS for folines.com

Do not point DNS to a host until the dedicated Folines hosting target is ready. Folines should not redirect to, or depend on, any older product site.

## Static hosting records

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 185.199.108.153 | Automatic |
| A | @ | 185.199.109.153 | Automatic |
| A | @ | 185.199.110.153 | Automatic |
| A | @ | 185.199.111.153 | Automatic |
| AAAA | @ | 2606:50c0:8000::153 | Automatic |
| AAAA | @ | 2606:50c0:8001::153 | Automatic |
| AAAA | @ | 2606:50c0:8002::153 | Automatic |
| AAAA | @ | 2606:50c0:8003::153 | Automatic |
| CNAME | www | Sabertlili.github.io | Automatic |

Use the records above only if the dedicated Folines marketing site is published through GitHub Pages. If another host is chosen later, use that host's DNS targets instead.

## Hosting checklist

1. Create a dedicated Folines-only site project.
2. Push this folder as the site root.
3. Enable HTTPS on the selected host.
4. Set the custom domain to `folines.com`.
5. Then update Namecheap DNS.
6. Wait for GitHub Pages to finish the DNS check and certificate provisioning.
7. Enable "Enforce HTTPS" in GitHub Pages when available.
