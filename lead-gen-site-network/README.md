# Lead-Gen Site Network

Static HTML/CSS sites, one project per niche/market. No build step, no database — plain files deployed straight to Cloudflare Pages.

## Structure

```
/sites/
  longview-tree-removal/   ← first site, live build
    index.html
    tree-removal.html
    emergency-storm-damage-tree-removal.html
    tree-trimming-pruning.html
    stump-grinding-removal.html
    contact.html
    styles.css              (site's own copy of /shared/styles.css)
    robots.txt
    sitemap.xml
/shared/
  styles.css                (source design system — copy into a new site folder to start it)
```

Each `/sites/<name>/` folder is deployed as its own Cloudflare Pages project, with that folder set as the project's root/output directory, and its own custom domain attached.

## Deploying longview-tree-removal

1. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git**, pick this repo.
2. Set **Build output directory** to `sites/longview-tree-removal` (no build command needed — it's already static).
3. Deploy, then add the custom domain `longviewtreepros.com` (and `www.longviewtreepros.com`) to the Pages project under its **Custom domains** tab. Since DNS is already on Cloudflare, this auto-creates the right DNS records — delete the old parking-page A/CNAME records first if Cloudflare doesn't overwrite them automatically.

## What's still pending on this site (Day 15–45 pages)

Land Clearing, Commercial Tree Service, Service Area (dedicated page), Pricing & Cost Guide, full FAQ, and Reviews are not built yet — see the master plan doc for the build order. No reviews go live until real reviews exist. No years-in-business or licensing/insurance claims are stated anywhere on the site yet, since no real operator is attached — add those only once verified.
