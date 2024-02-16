const AboutBoardUI = (props: any) => {
  return (
    <>
      <div className="wrap-about">
        <div className="wrap-about-left">
          <img className="" src="/img/profile-draw.jpeg" alt="자화상" />
        </div>
        <div className="wrap-about-right">
          <section style={{ margin: "0 0 4em" }}>
            <h3 style={{ margin: "0 0 1em", color: "#c22b2b" }}>Introduce</h3>
            <p>
              스타트업에서 신입 프론트엔드 개발자로 근무하며 웹 서비스를 개발,
              배포 및 운영을 경험했습니다. 담당한 업무는 주로 웹 프론트엔드
              개발이었으며 초기 기획이나 UI·UX 기획에도 일부 참여했습니다. 첫
              프로젝트에 혼자 웹 개발을 담당했기에 앞으로의 유지 보수를 생각하여
              기술 선정이나 폴더 구조에 신경을 많이 썼습니다.
            </p>
            <br />
            <p>
              사용자가 이용하고 접근하기 쉬운 서비스를 제공하는 게 먼저라고
              생각합니다. 이를 위해 기존 기획을 꼼꼼히 살피며 개발과정에서
              서비스 흐름을 반복하며 불편한 점이 없는지 확인하는 노력을
              했습니다. 또 하나의 서비스를 만들어가기 위해 다양한 직무의
              사람들이 협업하여 모인 만큼 서로가 생각하는 중요도가 다르다고
              생각해, 적극적인 소통으로 반영해왔습니다.
            </p>
            <br />
            <p>
              비슷한 코드는 재사용을 통해 효율성을 높였습니다. 여러 프로젝트를
              진행했지만 공통된 기능을 가진 코드를 여러 번 사용할 때가 있었는데,
              필요 없는 시간을 줄이기 위해 따로 분리 후 정리하여 재사용을 했고
              시간 단축에 효과를 봤습니다. 그로 인해 코드가 제대로 작동하는지
              점검할 수 있는 시간이 늘어났고 오류 없이 작동할 때 뿌듯함을
              느꼈습니다.
            </p>
          </section>
          <section>
            <h3 style={{ margin: "0 0 1em", color: "#ff9f00" }}>Education</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ width: "45%" }}>
                <p>코드캠프</p>
                <p>프론트엔드 부트캠프 3기</p>
                <p>(21.08 ~ 21.11)</p>
                <p>• 프론트엔드 기초 과정 학습</p>
                <p>• Next.js, GraphQL을 사용해 웹 서비스 제작</p>
              </div>
              <div style={{ width: "45%" }}>
                <p>군산대학교</p>
                <br />
                <p>(16.03 ~ 20.02)</p>
                <p>• 산업디자인학과 졸업</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutBoardUI;
