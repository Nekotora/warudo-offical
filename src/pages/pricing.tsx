export function PricingPage() {
  return (
    <>
      <div className="page price-page">
      <div className="container">
          <h1>Pricing</h1>
        </div>
        <div className="container">
          <div className="price-lists">
            <div className="list list-1">
              <h2 className="type">个人用户</h2>
              <div className="price">Free*</div>
              <div className="features">
                <div className="item">list1</div>
                <div className="item">list2</div>
                <div className="item">list3</div>
              </div>
            </div>
            <div className="list list-2">
              <h2 className="type">商业用户</h2>
              <div className="price">联系我们</div>
              <div className="features">
                <div className="item">list1</div>
                <div className="item">list2</div>
                <div className="item">list3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}