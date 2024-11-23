import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <aside className="widget-area" id="secondary">
        {/* Search form */}
        <div className="widget widget_search">
          <form className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* Recent Posts */}
        <div className="widget widget_zash_posts_thumb">
          <h3 className="widget-title">Recent Posts</h3>

          <article className="item">
            <Link href="/single-blog/" className="thumb">
              <span className="fullimage cover bg1" role="img"></span>
            </Link>

            <div className="info">
              <time className="2020-06-30">June 10, 2020</time>
              <h4 className="title usmall">
                <Link href="/single-blog/">
                  Making Peace With The Feast Or Famine Of Freelancing
                </Link>
              </h4>
            </div>
          </article>

          <article className="item">
            <Link href="/single-blog/" className="thumb">
              <span className="fullimage cover bg2" role="img"></span>
            </Link>

            <div className="info">
              <time className="2020-06-30">June 21, 2020</time>
              <h4 className="title usmall">
                <Link href="/single-blog/">
                  I Used The Web For A Day On A 50 MB Budget
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>

          <article className="item">
            <Link href="/single-blog/" className="thumb">
              <span className="fullimage cover bg3" role="img"></span>
            </Link>

            <div className="info">
              <time className="2020-06-30">June 30, 2020</time>
              <h4 className="title usmall">
                <Link href="/single-blog/">
                  How To Create A Responsive Popup Gallery?
                </Link>
              </h4>
            </div>

            <div className="clear"></div>
          </article>
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog">
                Business
                <span className="post-count">(05)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Privacy
                <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Technology
                <span className="post-count">(15)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Tips
                <span className="post-count">(10)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                Uncategorized
                <span className="post-count">(05)</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="/blog">
              IT <span className="tag-link-count"> (3)</span>
            </Link>
            <Link href="/blog">
              Crimso <span className="tag-link-count"> (3)</span>
            </Link>
            <Link href="/blog">
              Games <span className="tag-link-count"> (2)</span>
            </Link>
            <Link href="/blog">
              Fashion <span className="tag-link-count"> (2)</span>
            </Link>
            <Link href="/blog">
              Travel <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="/blog">
              Smart <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="/blog">
              Marketing <span className="tag-link-count"> (1)</span>
            </Link>
            <Link href="/blog">
              Tips <span className="tag-link-count"> (2)</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogSidebar;
