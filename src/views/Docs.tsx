import type { FC } from "hono/jsx";
import Layout from "./Layout.js";

const Docs: FC = () => {
  return (
    <Layout title="DailyHot API - 文档">
      <main className="docs">
        <div className="title">
          <div className="title-text">项目文档</div>
        </div>
        <div className="content-wrap">
          <section>
            <h2>技术栈</h2>
            <ul>
              <li>框架：Hono</li>
              <li>语言：TypeScript</li>
              <li>模块系统：ESM</li>
              <li>模板：JSX</li>
            </ul>
          </section>
          <section>
            <h2>请求参数</h2>
            <table>
              <thead>
                <tr>
                  <th>参数</th>
                  <th>说明</th>
                  <th>示例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>rss</td>
                  <td>返回 RSS 格式数据</td>
                  <td>?rss=true</td>
                </tr>
                <tr>
                  <td>limit</td>
                  <td>限制返回数据条数</td>
                  <td>?limit=20</td>
                </tr>
                <tr>
                  <td>cache</td>
                  <td>是否使用缓存（默认缓存 60 分钟）</td>
                  <td>?cache=false</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <h2>路由结构</h2>
            <p>所有路由文件统一放在 <code>src/routes/</code> 目录下，文件名即为路由路径。每个路由导出一个 <code>handleRoute</code> 函数，接收 context 和 noCache 参数，返回标准化的 <code>RouterData</code> 对象。</p>
          </section>
          <section>
            <h2>部署方式</h2>
            <h3>Docker</h3>
            <pre><code>docker pull imsyy/dailyhot-api:latest{"\n"}docker run -p 6688:6688 -d imsyy/dailyhot-api:latest</code></pre>
            <h3>Docker Compose</h3>
            <pre><code>docker-compose up -d</code></pre>
            <h3>手动部署</h3>
            <pre><code>pnpm install{"\n"}pnpm build{"\n"}pnpm start</code></pre>
          </section>
        </div>
        <div className="control">
          <button id="back-button">返回首页</button>
        </div>
      </main>
      <script>{`document.getElementById("back-button").addEventListener("click",()=>{window.location.href="/"})`}</script>
    </Layout>
  );
};

export default Docs;
