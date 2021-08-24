import React from "react";
import "./Articles.scss";

const Articles = () => {
  return (
    <section className="articles">
      <div className="article-content containerr">
        <h2>Latest Articles </h2>
        <div className="article-grid">
          <div className="article-item">
            <div className="article-cury"></div>
            <div className="article-text">
              <div className="article-author">By Claire Robinson</div>
              <div className="article-title">
                Receive money in any currency with no fees
              </div>
              <div className="article-description">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …{" "}
              </div>
            </div>
          </div>
          <div className="article-item">
            <div className="article-res"></div>
            <div className="article-text">
              <div className="article-author"> By Wilson Hutton </div>
              <div className="article-title">
                Treat yourself without worrying about money
              </div>
              <div className="article-description">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </div>
            </div>
          </div>
          <div className="article-item">
            <div className="article-avion"></div>
            <div className="article-text">
              <div className="article-author"> By Wilson Hutton</div>
              <div className="article-title">
                Take your Easybank card wherever you go
              </div>
              <div className="article-description">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </div>
            </div>
          </div>
          <div className="article-item">
            <div className="article-azul"></div>
            <div className="article-text">
              <div className="article-author">By Claire Robinson</div>
              <div className="article-title">
                Our invite-only Beta accounts are now live!
              </div>
              <div className="article-description">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
