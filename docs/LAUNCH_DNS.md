# Launch-day DNS move (Wix → GoDaddy → Vercel)

hallstat.com is registered at **GoDaddy**, but its DNS is currently served by **Wix**
(nameservers `ns0.wixdns.net`, `ns1.wixdns.net`). Leaving Wix means moving DNS to GoDaddy.
Do everything below in one sitting, in this order. Do **not** cancel Wix until step 6 is done.

## 1. Before changing anything
- [ ] Screenshot every section of Wix → Domains → hallstat.com → Manage DNS Records (A, AAAA, CNAME, MX, TXT, SRV).
- [ ] Confirm whether any email uses @hallstat.com (MX records present?) and where it is hosted.

## 2. Records to recreate in GoDaddy
Copy exact values from the source shown (DNS values are public; none of these are secrets).

| Type | Name (GoDaddy) | Value | Source | Purpose |
|---|---|---|---|---|
| TXT | `resend._domainkey.contact` | `p=MIGfMA0…` (full) | Resend → Domains → contact.hallstat.com | Form email (DKIM) |
| CNAME | `rsend.contact` | `rsend.fo…mta.net` (full) | Resend | Form email (SPF) |
| CNAME | `send.contact` | `send.for…mta.net` (full) | Resend | Form email (SPF) |
| TXT | `_dmarc` | `v=DMARC1; p=none;` | Resend | Email policy |
| TXT | `@` | `google-site-verification=ScbK…` (full) | Wix TXT records | Google Search Console |
| A / CNAME | `@` and `www` | values Vercel shows | Vercel → Settings → Domains | New website |
| MX (+ any TXT/CNAME for email) | as listed | copy from Wix | Wix DNS page | Email on @hallstat.com (if any) |

Do **not** copy Wix's own website records (`www → cdn3.wixdns.net`, Wix A records): the website moves to Vercel.

## 3. Steps
1. In Vercel → Project → Settings → Domains, add `hallstat.com` and `www.hallstat.com`; note the records it asks for.
2. In GoDaddy → hallstat.com → DNS → Nameservers → **GoDaddy Nameservers** → Save.
3. In GoDaddy → DNS Records, add every row in the table above.
4. Wait until Vercel shows both domains as Valid and Resend still shows contact.hallstat.com as Verified.
5. Test: site loads on https://www.hallstat.com, old URLs redirect (/our-team, /hallstat-foley-system),
   Contact form delivers, @hallstat.com email (if any) still receives.
6. Only then cancel the Wix premium plan. Keep the domain registered at GoDaddy.
