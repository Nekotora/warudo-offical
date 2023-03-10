import { BsSteam } from "react-icons/bs";
import { IoLogoDiscord, IoLogoTwitter } from "react-icons/io5";

export function IndexPage() {
  return (
    <>
      <div className="page index-page">
        <div className="container">
          <div className="intro block">
            <div className="item">
              <h3>针对家用3D优化</h3>
              <p>一台 iPhone 即可面捕 + 上半身动捕，也提供摄像头动捕方案。内置 500+ 个待机动画，配合 IK 功能，可以让你的虚拟形象摆出任何想要的 Pose。</p>
            </div>
            <div className="item">
              <h3>简单易用</h3>
              <p>上至动捕 + 动画的无缝融合、多摄像机输出、同类软件中最强大的面捕映射及表情切换系统，下至动捕数据的平滑幅度和摄像机的 LUT 材质，丰富的配置选项让你的虚拟形象动画更自然、也更具表现力。</p>
            </div>
            <div className="item">
              <h3>自定义和拓展性</h3>
              <p>角色模型、环境模型、摄像机配置甚至互动逻辑等都保存在 Warudo 的场景文件内，可一键切换不同直播场景，也方便开发 / 运营人员调试好场景后发给 VTuber 直接使用。</p>
            </div>
          </div>
        </div>


        <div className="container point-block">
          <div className="block lr-box">
            <div className="left">
              <div className="title-box">
                <h4>轻松上手</h4>
                <h2>
                  3D开播<br />
                  如此轻松愉快
                </h2>
                <p>加载模型，设置动补，开始直播。</p>
              </div>
              <a href="#">
                <div className="button"></div>
              </a>
            </div>
            <div className="right">
            </div>
          </div>

          <div className="block rl-box">
            <div className="left">
              <div className="title-box">
                <h4>拓展性</h4>
                <h2>
                  让每个物种都能轻松使用的<br />
                  专业设置
                </h2>
                <p>不只是模型，表情，</p>
              </div>
            </div>
            <div className="right">
            </div>
          </div>

          <div className="block">
            <div className="left">
              <div className="title-box">
                <h4>专业功能</h4>
                <h2>
                  蓝图、SDK、Mod<br />
                  像制作游戏一样专业
                </h2>
                <p>
                  Warudo具有可视化编程的能力，<br />
                你可以讲3D组件中的部分编程交互
                </p>
              </div>
            </div>
            <div className="right">
            </div>
          </div>

          <div className="block rl-box">
            <div className="left">
              <div className="title-box">
                <h4>分享&创造</h4>
                <h2>
                  使用<br />
                  Steam创意工坊<br />
                  轻松获取和分享
                </h2>
                <p>Warudo可以使用Steam工坊进行模型动作的分享，也可以将配置好的方案发送给朋友使用。</p>
              </div>
            </div>
            <div className="right">
            </div>
          </div>


          <div className="block">
            <div className="left">
              <div className="title-box">
                <h2>更多功能</h2>
              </div>
            </div>
            <div className="right">
              <div className="tag-list">
                {
                  [
                    '镜头效果', '布娃娃', 'IK', '时间轴动画'
                  ].map((item) => {
                    return (<div>{item}</div>)
                  })
                }
              </div>
            </div>
          </div>
        </div>

        <div className="container price-block">
          <div className="block">
            <div className="left">
              <div className="title-box">
                <h2>Price</h2>
              </div>
            </div>
            <div className="content">
              <div className="price-lists">
                <div className="list list-1">
                  <div className="price">
                    <h2>Personal User</h2>
                    <p>Free*</p>
                  </div>
                  <div className="features">
                    <div className="item">list1</div>
                  </div>
                  <div className="action">
                    <div className="button">Download</div>
                  </div>
                </div>
                <div className="list list-2">
                  <div className="price">
                    <h2>commercial user</h2>
                    <p>Contact us</p>
                  </div>
                  <div className="features">
                    <div className="item">list2</div>
                  </div>
                  <div className="action">
                    <div className="button">Contact Us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container price-block">
          <div className="block">
            <div className="left">
              <div className="title-box">
                <h2>FAQ</h2>
              </div>
            </div>
            <div className="content">
              <div className="faq-list">
                <div className="item">
                  <h4>关于Warudo的使用授权？</h4>
                  <div className="content">
                    <p>非直播用途下，Warudo可以免费使用，例如测试模型，截图发布在SNS等。</p>
                    <p>（事先录制再直播播放，视为直播用途）</p>
                    <p>直播用一下，如果同时满足以下三点条件，可以免费试用Warudo：</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container price-block">
          <div className="block">
            <div className="left">
              <div className="title-box">
                <h2>Download</h2>
              </div>
            </div>
            <div className="content">
              <div className="download-list">
              <a href="#">
                <div className="button-steam-download">
                  <span className="icon"><BsSteam /></span>
                  <span>Get it on Steam</span>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container price-block">
          <div className="block">
            <div className="left">
              <div className="title-box">
                <h2>Community</h2>
              </div>
            </div>
            <div className="content">
              <div className="download-list">
              <a href="#">
                <div className="button-steam-download">
                  <span className="icon"><IoLogoTwitter /></span>
                  <span>Twitter</span>
                </div>
                </a>
                <a href="#">
                <div className="button-steam-download">
                  <span className="icon"><IoLogoDiscord /></span>
                  <span>Discord</span>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}