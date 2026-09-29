<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep Born Saved’s five content pages as TanStack file routes and shared site chrome in `SiteLayout`; this preserves navigation and page-specific search metadata.
- Store copied public-domain-facing site media as Lovable Assets pointers and original written content in `src/data`; this avoids hotlinks and keeps the rebuild faithful to the source.
