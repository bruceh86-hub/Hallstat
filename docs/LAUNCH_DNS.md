# Launch-day DNS move (Wix → GoDaddy → Vercel)

> **Status (Nov 2026): DONE.** Nameservers switched to GoDaddy (ns47/ns48.domaincontrol.com); all records below
> added; Vercel shows hallstat.com (308 → www) and www.hallstat.com as Valid. Remaining: confirm email/forms,
> wait 1–2 days, then cancel the Wix plan (disconnect the domain, never delete/transfer).
>
> Final GoDaddy records: A @ 216.198.79.1 · CNAME www c54cc9b0a91ed6a2.vercel-dns-017.com · MX @ aspmx.l.google.com (10) ·
> TXT @ google-site-verification · TXT @ v=spf1 include:_spf.google.com ~all · TXT _dmarc v=DMARC1; p=none; ·
> Resend: TXT resend._domainkey.contact, CNAME rsend.contact / send.contact → *.forge.rmta.net.
> Email is Google Workspace, billed by Google directly (not affected by cancelling Wix).

hallstat.com is registered at **GoDaddy**, but its DNS is currently served by **Wix**
(nameservers `ns0.wixdns.net`, `ns1.wixdns.net`). Leaving Wix means moving DNS to GoDaddy.
Do everything below in one sitting, in this order. Do **not** cancel Wix until step 6 is done.

## 1. Before changing anything
- [ ] Screenshot every section of Wix → Domains → hallstat.com → Manage DNS Records (A, AAAA, CNAME, MX, TXT, SRV).
- [ ] **info@hallstat.com is a live inbox** (confirmed Nov 2026). Its MX (and any related TXT/CNAME) records are in Wix DNS and MUST be copied to GoDaddy, or that inbox stops receiving mail. The website contact form delivers to this inbox.

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
