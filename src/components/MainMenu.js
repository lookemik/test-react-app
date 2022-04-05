import React from "react";

function MainMenu() {
  return (
    <div className="master-sidebar-collapsed">
      <HeaderDirectorlogo />
      <Property1Tests mainMenuMasterProps={property1TestsData.mainMenuMasterProps} />
      <div className="main-menu-master-1">
        <div className="overlap-group">
          <img className="text_snippet" src="text-snippet.svg" />
          <MasterNotificationLabel>309</MasterNotificationLabel>
        </div>
        <img className="settings" src="settings.svg" />
      </div>
      <StateDefaultTypeIconStyleImage
        masterUserProfileItemIconProps={stateDefaultTypeIconStyleImageData.masterUserProfileItemIconProps}
      />
    </div>
  );
}

export default MainMenu;

function HeaderDirectorlogo() {
  return <div className="header-directorlogo"></div>;
}

function Property1Tests(props) {
  const { mainMenuMasterProps } = props;

  return (
    <div className="main-menu">
      <MainMenuMaster mainMenuItem={mainMenuMasterProps.mainMenuItem} />
    </div>
  );
}

function MainMenuMaster(props) {
  const { mainMenuItem } = props;

  return (
    <div className="main-menu-master">
      <div
        className="main-menu-item"
        style={{ backgroundImage: `url(${mainMenuItem})` }}
      ></div>
      <img className="main-menu-master-item" src="bx-bxs-book.svg" />
      <img className="main-menu-master-item-1" src="dashicons-admin-multisite.svg" />
      <img className="main-menu-master-item-1" src="ph-chalkboard-teacher-fill.svg" />
      <img className="main-menu-master-item-1" src="ph-student-fill.svg" />
      <div className="master-main-menu-item-icon">
        <img
          className="fluentclipboard-task-list-ltr-20-filled"
          src="fluent-clipboard-task-list-ltr-20-filled.svg"
        />
      </div>
      <img className="main-menu-master-item" src="archive.svg" />
    </div>
  );
}

function MasterNotificationLabel(props) {
  const { children } = props;

  return (
    <div className="master-notification-label">
      <div className="x3">
        {children}
      </div>
    </div>
  );
}

function StateDefaultTypeIconStyleImage(props) {
  const { masterUserProfileItemIconProps } = props;

  return (
    <div className="user-profile-menu-item">
      <MasterUserProfileItemIcon
        src={masterUserProfileItemIconProps.src}
      />
    </div>
  );
}

function MasterUserProfileItemIcon(props) {
  const { src } = props;

  return (
    <div
      className="master-user-profile-item-icon"
      style={{ backgroundImage: `url(${src})` }}
    ></div>
  );
}

const mainMenuMasterData = {
  mainMenuItem: "master-main-menu-item-icon.png",
};

const property1TestsData = {
  mainMenuMasterProps: mainMenuMasterData,
};

const masterUserProfileItemIconData = {
  src: "master-user-profile-item-icon.png",
};

const stateDefaultTypeIconStyleImageData = {
  masterUserProfileItemIconProps: masterUserProfileItemIconData,
};