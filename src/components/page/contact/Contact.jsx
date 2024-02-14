import { Box, Paper, Stack, styled } from "@mui/material";
import "./Contact.css";

const Contact = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 500,
  }));
  const sendEmail = () => {
    event.preventDefault();
    const link =
      "mailto:lariojacapital@rotaract4851.org" +
      "?cc=" +
      encodeURIComponent(document.querySelector("#email").value) +
      "&subject=" +
      encodeURIComponent("Contactando desde la pagina de Rotaract") +
      "&body=" +
      encodeURIComponent(document.querySelector("#message").value);
    window.location.href = link;
  };
  return (
    <>
      <div id="contact-header" className="header-container">
        <div className="star-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="98"
            viewBox="0 0 78 98"
            fill="none"
          >
            <path
              d="M30.0724 58.6413C21.6704 58.1584 13.8196 57.8738 6.01111 57.1581C3.95089 56.9683 2.00087 55.4678 0 54.5709C1.98391 53.5878 3.90849 51.9493 5.9687 51.7337C13.3957 50.9489 20.882 50.6644 28.3428 50.147C29.267 50.0866 30.1741 49.7934 32.1835 49.3794C26.0028 40.5056 20.1952 32.1924 14.3961 23.8705L16.2528 22.3872C21.3144 28.1133 26.3674 33.8481 32.0224 40.2469C32.6668 35.4176 33.345 31.1661 33.7859 26.8974C34.5235 19.7656 35.1085 12.6165 35.7698 5.47607C35.8461 4.62232 35.7952 3.66509 36.1598 2.94069C36.6855 1.87997 37.5333 0.974481 38.237 0C38.9746 1.03485 40.2548 2.01795 40.3565 3.12178C41.0009 9.83104 41.357 16.5662 41.8487 23.2841C42.3828 30.528 42.9678 37.7719 43.502 44.6623C49.8946 38.962 56.2787 33.2617 61.9507 28.2082C57.5844 34.5811 52.5907 41.8768 47.19 49.7675C57.7878 51.8631 68.7417 50.6213 78 56.8735C68.038 60.5127 57.7454 58.7879 47.2663 59.4347C50.2337 67.4202 56.2957 73.5172 57.4911 82.0288C51.3613 77.8722 48.1311 71.1975 42.5185 64.8677C41.6368 73.6984 40.8228 81.5545 40.0852 89.4108C39.8987 91.4028 40.1276 93.4553 39.797 95.4215C39.6359 96.3615 38.6185 97.1462 37.9826 98C37.2196 97.2584 35.9563 96.6116 35.7868 95.7492C34.9983 91.6788 34.32 87.5653 33.9724 83.4345C33.4552 77.3548 33.2602 71.2406 32.8702 64.1346C27.8426 69.6021 23.4424 74.3882 19.0422 79.1744L17.3804 77.8808C19.322 70.3782 25.6807 65.4972 30.0554 58.6499L30.0724 58.6413ZM36.9822 30.0623C34.8683 38.7148 34.7439 43.9379 36.6091 45.7316C36.7448 45.309 36.9652 44.9382 36.9652 44.5674C36.9907 39.7295 36.9822 34.9002 36.9822 30.0623Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="title">
          <h1>Contactanos</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="264"
            height="36"
            viewBox="0 0 264 36"
            fill="none"
          >
            <path
              d="M263.269 35.7904C247.654 30.2653 232.176 24.3023 216.386 19.2917C178.074 7.12963 138.77 4.61682 98.925 8.35178C74.0112 10.6812 49.7198 16.1537 25.6215 22.6522C18.5725 24.5504 11.4346 26.1477 4.31449 27.7669C3.28425 27.9997 2.10157 27.5829 0.769022 27.4418C0.327307 22.3067 4.29667 21.098 7.52838 20.1128C23.377 15.2647 39.1297 9.80319 55.2879 6.30526C88.5518 -0.902005 122.384 -1.04008 156.099 2.02723C192.602 5.34961 226.942 16.6586 259.644 33.0836C260.952 33.745 262.156 34.6266 263.4 35.412L263.257 35.8092L263.269 35.7904Z"
              fill="#009999"
            />
          </svg>
        </div>
        <div className="star-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="98"
            viewBox="0 0 78 98"
            fill="none"
          >
            <path
              d="M30.0724 58.6413C21.6704 58.1584 13.8196 57.8738 6.01111 57.1581C3.95089 56.9683 2.00087 55.4678 0 54.5709C1.98391 53.5878 3.90849 51.9493 5.9687 51.7337C13.3957 50.9489 20.882 50.6644 28.3428 50.147C29.267 50.0866 30.1741 49.7934 32.1835 49.3794C26.0028 40.5056 20.1952 32.1924 14.3961 23.8705L16.2528 22.3872C21.3144 28.1133 26.3674 33.8481 32.0224 40.2469C32.6668 35.4176 33.345 31.1661 33.7859 26.8974C34.5235 19.7656 35.1085 12.6165 35.7698 5.47607C35.8461 4.62232 35.7952 3.66509 36.1598 2.94069C36.6855 1.87997 37.5333 0.974481 38.237 0C38.9746 1.03485 40.2548 2.01795 40.3565 3.12178C41.0009 9.83104 41.357 16.5662 41.8487 23.2841C42.3828 30.528 42.9678 37.7719 43.502 44.6623C49.8946 38.962 56.2787 33.2617 61.9507 28.2082C57.5844 34.5811 52.5907 41.8768 47.19 49.7675C57.7878 51.8631 68.7417 50.6213 78 56.8735C68.038 60.5127 57.7454 58.7879 47.2663 59.4347C50.2337 67.4202 56.2957 73.5172 57.4911 82.0288C51.3613 77.8722 48.1311 71.1975 42.5185 64.8677C41.6368 73.6984 40.8228 81.5545 40.0852 89.4108C39.8987 91.4028 40.1276 93.4553 39.797 95.4215C39.6359 96.3615 38.6185 97.1462 37.9826 98C37.2196 97.2584 35.9563 96.6116 35.7868 95.7492C34.9983 91.6788 34.32 87.5653 33.9724 83.4345C33.4552 77.3548 33.2602 71.2406 32.8702 64.1346C27.8426 69.6021 23.4424 74.3882 19.0422 79.1744L17.3804 77.8808C19.322 70.3782 25.6807 65.4972 30.0554 58.6499L30.0724 58.6413ZM36.9822 30.0623C34.8683 38.7148 34.7439 43.9379 36.6091 45.7316C36.7448 45.309 36.9652 44.9382 36.9652 44.5674C36.9907 39.7295 36.9822 34.9002 36.9822 30.0623Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div id="contact-main">
        <div id="contact-content">
          <div className="contact-form">
            <h1>Contactanos</h1>
            <svg
              className="header-line"
              xmlns="http://www.w3.org/2000/svg"
              width="168"
              height="19"
              viewBox="0 0 168 19"
              fill="none"
            >
              <path
                d="M0.0312154 17.1186C0.329105 16.3258 0.523262 15.4662 0.948479 14.7445C4.3478 9.01959 15.2722 4.65803 21.7466 6.56586C23.7231 7.15153 25.59 8.18612 27.4399 9.14473C32.8924 11.9852 37.9885 11.3635 42.7903 7.6859C44.4494 6.41561 45.9968 4.98576 47.691 3.75814C51.9496 0.677977 56.1487 0.694734 60.3995 3.79764C61.7627 4.79206 63.1481 5.83296 64.2577 7.0928C66.6309 9.77343 69.305 9.98954 72.3143 8.47691C75.4304 6.91016 78.559 5.37601 81.6161 3.69547C90.0452 -0.929734 95.5995 0.195582 101.129 7.98132C102.64 10.1025 104.414 10.8349 106.761 10.0752C109.308 9.25336 111.846 8.34479 114.303 7.27594C120.459 4.60939 123.838 5.20527 128.54 9.95666C130.777 12.2159 133.26 12.4489 135.988 10.6557C137.404 9.73166 138.811 8.75143 140.326 8.02131C143.193 6.62944 145.734 7.21745 147.858 9.58658C148.656 10.4753 149.433 11.3844 150.223 12.2839C151.62 13.8802 153.274 14.2206 155.347 13.7104C158.728 12.8835 162.153 12.2166 165.583 11.6295C166.33 11.4997 167.185 11.997 167.994 12.2006C167.577 13.0148 167.333 14.3644 166.719 14.5663C162.235 16.0316 157.739 17.7686 153.109 18.3326C151.207 18.5629 148.623 16.4592 146.975 14.8005C143.692 11.4851 143.875 11.3106 139.779 13.7809C138.329 14.6563 136.933 15.6445 135.409 16.3549C132.183 17.8537 130 17.268 127.815 14.5173C123.469 9.05643 121.673 8.69103 115.295 11.3427C112.369 12.5538 109.29 13.4642 106.209 14.2102C102.81 15.0339 100.009 13.7798 98.4324 10.6498C95.3277 4.49563 91.0509 3.6442 84.453 6.92C80.1817 9.03713 75.8997 11.1463 71.5243 13.0261C68.1553 14.4753 65.2535 13.5501 62.5833 10.9327C56.1326 4.61419 55.1654 4.6504 48.2039 10.2641C39.4776 17.2997 32.6038 17.6566 23.2414 11.2625C20.2507 9.22101 17.3033 8.65873 13.9727 9.99308C11.5712 10.9561 9.05442 11.7103 6.81075 12.9505C4.60662 14.1733 2.67835 15.9009 0.625173 17.4057L0.0322547 17.1127L0.0312154 17.1186Z"
                fill="black"
              />
            </svg>
            <form onSubmit={sendEmail} method="post">
              <div className="contact-form">
                <label className="contact-label" htmlFor="">
                  Nombre
                </label>
                <input
                  className="contact-textfield"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
                <label className="contact-label" htmlFor="">
                  Email
                </label>
                <input
                  className="contact-textfield"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
                <label className="contact-label" htmlFor="">
                  Mensaje
                </label>
                <textarea
                  className="contact-textfield"
                  name="message"
                  id="message"
                  required
                ></textarea>
                <button className="send-message" type="submit">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <Box className="box-email box-contact">
              <Item sx={{ my: 1, p: 2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="98"
                  height="68"
                  viewBox="0 0 98 68"
                  fill="none"
                >
                  <path
                    d="M54.5388 1.02313C66.1944 1.36028 77.8567 1.68368 89.5123 2.04836C94.8116 2.2135 96.8787 3.5346 97.3568 8.92222C98.01 16.2984 98.1715 23.7709 97.8146 31.1677C97.4578 38.4681 96.5555 45.7892 95.2223 52.9727C93.1618 64.1127 90.3405 66.7342 79.7286 67.2916C68.4366 67.8833 57.0639 67.8283 45.7651 67.2916C34.9243 66.7824 24.1238 65.365 13.3166 64.1952C11.007 63.9475 8.7042 63.2526 6.5091 62.4475C2.6643 61.037 0.442284 58.2021 0.388417 53.9154C0.220081 39.8236 -0.0896844 25.725 0.0247842 11.6332C0.0853853 3.96809 3.49254 1.07129 12.5154 0.844228C23.7198 0.568998 34.931 0.741019 46.1354 0.720377C48.9365 0.720377 51.7377 0.720377 54.5456 0.720377C54.5456 0.823588 54.5456 0.926797 54.5456 1.03001L54.5388 1.02313ZM46.5866 41.7434C56.6329 35.5713 87.021 10.2571 90.2059 5.15845C62.1207 5.1791 34.2577 2.94285 5.70112 5.7846C19.7269 18.1218 33.0052 29.8053 46.5799 41.7502L46.5866 41.7434ZM59.5149 36.9268C55.6701 39.6172 52.5996 41.6952 49.6099 43.8833C47.6033 45.3489 45.718 45.3695 43.7451 43.8833C40.8834 41.7227 37.9948 39.6035 35.0926 37.4498C25.585 44.2067 16.0706 50.9636 6.55628 57.7205C6.65728 58.092 6.75824 58.4636 6.85251 58.842C31.7124 63.7342 56.781 64.6631 81.9978 62.826C82.1796 62.5232 82.3614 62.2136 82.5432 61.9108C74.8469 53.5645 67.1506 45.225 59.5081 36.9337L59.5149 36.9268ZM92.9868 8.77773C82.2066 17.7984 72.1199 26.2411 62.289 34.4773C70.9954 43.147 79.4458 51.5691 88.7312 60.8168C92.9262 43.3053 93.8083 26.5851 92.9868 8.78461V8.77773ZM32.6349 34.8351C23.4976 26.9016 14.2054 18.8305 4.91327 10.7594C4.63047 10.9314 4.34766 11.1034 4.06485 11.2823V55.5874C13.6264 48.6448 22.9791 41.8466 32.6349 34.8351Z"
                    fill="black"
                  />
                </svg>
                <Stack>
                  <p className="box-text">Email</p>
                </Stack>
                <Stack>
                  <p className="box-url email">
                    <a href="mailto:lariojacapital@rotaract4851.org">
                      lariojacapital@rotaract4851.org
                    </a>
                  </p>
                </Stack>
              </Item>
            </Box>
            <Box className="box-social box-contact">
              <Item sx={{ my: 1, p: 2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="84"
                  height="71"
                  viewBox="0 0 84 71"
                  fill="none"
                >
                  <path
                    d="M0.00856494 22.461C11.3803 19.079 22.1958 15.671 33.114 12.6513C48.1822 8.47554 63.3187 4.54133 78.4554 0.650243C80.1838 0.201603 82.1518 0.676127 84 0.719266C83.5037 2.57422 83.3497 4.6276 82.4513 6.25823C77.4029 15.3949 71.9609 24.316 67.058 33.5303C61.0855 44.7722 55.5237 56.2384 49.748 67.5924C49.3116 68.4465 48.6356 69.1799 47.6687 70.5344C42.3893 65.5045 37.3324 60.6816 31.5653 55.1944C27.4923 59.7412 23.5563 64.1327 19.6202 68.5242L18.3026 68.1014C17.7378 64.8315 16.9933 61.5789 16.6511 58.2831C16.1462 53.4344 16.2746 48.4907 15.4446 43.7024C14.9483 40.8121 13.6135 37.7838 11.8338 35.4629C9.24113 32.0809 5.86979 29.3114 2.90921 26.2141C1.87386 25.1356 1.06102 23.8414 0 22.461H0.00856494ZM45.0248 66.4535C56.1398 46.6271 66.4077 28.3278 76.667 10.0199C76.4189 9.81284 76.1707 9.60577 75.9226 9.39871C60.1015 22.5732 44.2889 35.7563 30.624 47.1275C35.4927 53.6587 40.2074 59.9914 45.0162 66.4535H45.0248ZM74.2198 5.31782L73.7065 3.98916C50.655 10.4081 27.6121 16.8185 3.46541 23.5481C8.03463 27.9482 11.6284 31.5977 15.4703 34.9453C16.172 35.5578 18.1143 35.4284 19.1069 34.9108C30.0679 29.1647 40.9518 23.272 51.8529 17.4052C59.3142 13.3847 66.767 9.34695 74.2198 5.31782ZM20.416 57.938C22.1188 54.2281 22.829 50.3112 25.1393 48.1025C32.4466 41.0968 40.3101 34.6692 48.0538 28.138C54.2659 22.901 60.632 17.8538 66.9382 12.7204C51.6647 20.0021 36.9045 27.9827 22.0589 35.808C19.7315 37.0332 19.1753 38.6034 19.355 40.9674C19.7572 46.3942 20.0481 51.8383 20.4246 57.9467L20.416 57.938ZM26.3543 51.1049C25.1991 54.3834 24.275 56.989 23.3509 59.5945L24.0098 59.9569C25.8152 58.007 27.6207 56.0572 29.6229 53.9003C28.5704 53.003 27.7661 52.3128 26.3543 51.1049Z"
                    fill="black"
                  />
                </svg>
                <Stack>
                  <p className="box-text">Social</p>
                </Stack>
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                    marginLeft: "30px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M11.999 7.62866C10.7726 7.62866 9.59651 8.11583 8.72934 8.983C7.86217 9.85017 7.375 11.0263 7.375 12.2527C7.375 13.479 7.86217 14.6552 8.72934 15.5223C9.59651 16.3895 10.7726 16.8767 11.999 16.8767C13.2254 16.8767 14.4015 16.3895 15.2687 15.5223C16.1358 14.6552 16.623 13.479 16.623 12.2527C16.623 11.0263 16.1358 9.85017 15.2687 8.983C14.4015 8.11583 13.2254 7.62866 11.999 7.62866ZM11.999 15.2557C11.2023 15.2557 10.4382 14.9392 9.87485 14.3758C9.31149 13.8125 8.995 13.0484 8.995 12.2517C8.995 11.455 9.31149 10.6909 9.87485 10.1275C10.4382 9.56415 11.2023 9.24766 11.999 9.24766C12.7957 9.24766 13.5598 9.56415 14.1231 10.1275C14.6865 10.6909 15.003 11.455 15.003 12.2517C15.003 13.0484 14.6865 13.8125 14.1231 14.3758C13.5598 14.9392 12.7957 15.2557 11.999 15.2557Z"
                      fill="black"
                    />
                    <path
                      d="M16.806 8.53661C17.4014 8.53661 17.884 8.05398 17.884 7.45861C17.884 6.86325 17.4014 6.38062 16.806 6.38062C16.2106 6.38062 15.728 6.86325 15.728 7.45861C15.728 8.05398 16.2106 8.53661 16.806 8.53661Z"
                      fill="black"
                    />
                    <path
                      d="M20.533 6.36259C20.3015 5.76477 19.9477 5.22187 19.4943 4.76865C19.0409 4.31543 18.4979 3.96186 17.9 3.73059C17.2003 3.46795 16.4612 3.32593 15.714 3.31059C14.751 3.26859 14.446 3.25659 12.004 3.25659C9.562 3.25659 9.249 3.25659 8.294 3.31059C7.54739 3.32515 6.80876 3.46719 6.11 3.73059C5.51193 3.96159 4.96876 4.31506 4.51533 4.76832C4.0619 5.22158 3.70823 5.76462 3.477 6.36259C3.2143 7.0622 3.07261 7.80143 3.058 8.54859C3.015 9.51059 3.002 9.81559 3.002 12.2586C3.002 14.7006 3.002 15.0116 3.058 15.9686C3.073 16.7166 3.214 17.4546 3.477 18.1556C3.70888 18.7534 4.0629 19.2962 4.51643 19.7494C4.96997 20.2026 5.51306 20.5562 6.111 20.7876C6.80843 21.0608 7.54737 21.213 8.296 21.2376C9.259 21.2796 9.564 21.2926 12.006 21.2926C14.448 21.2926 14.761 21.2926 15.716 21.2376C16.4631 21.2224 17.2022 21.0807 17.902 20.8186C18.4998 20.5868 19.0426 20.2329 19.496 19.7796C19.9493 19.3262 20.3032 18.7833 20.535 18.1856C20.798 17.4856 20.939 16.7476 20.954 15.9996C20.997 15.0376 21.01 14.7326 21.01 12.2896C21.01 9.84659 21.01 9.53659 20.954 8.57959C20.9424 7.82186 20.7999 7.07184 20.533 6.36259ZM19.315 15.8946C19.3085 16.4709 19.2034 17.0418 19.004 17.5826C18.8538 17.9715 18.6239 18.3246 18.3291 18.6193C18.0342 18.9139 17.681 19.1436 17.292 19.2936C16.7572 19.492 16.1924 19.5972 15.622 19.6046C14.672 19.6486 14.404 19.6596 11.968 19.6596C9.53 19.6596 9.281 19.6596 8.313 19.6046C7.74293 19.5976 7.17832 19.4924 6.644 19.2936C6.25369 19.1446 5.899 18.9153 5.60289 18.6206C5.30678 18.3258 5.07583 17.9722 4.925 17.5826C4.72845 17.0476 4.62331 16.4834 4.614 15.9136C4.571 14.9636 4.561 14.6956 4.561 12.2596C4.561 9.82259 4.561 9.57359 4.614 8.60459C4.62046 8.02861 4.72565 7.45801 4.925 6.91759C5.23 6.12859 5.855 5.50759 6.644 5.20559C7.17859 5.00773 7.74302 4.90256 8.313 4.89459C9.264 4.85159 9.531 4.83959 11.968 4.83959C14.405 4.83959 14.655 4.83959 15.622 4.89459C16.1924 4.90145 16.7574 5.00666 17.292 5.20559C17.6809 5.35586 18.0341 5.58579 18.329 5.88062C18.6238 6.17545 18.8537 6.52866 19.004 6.91759C19.2006 7.45254 19.3057 8.01675 19.315 8.58659C19.358 9.53759 19.369 9.80459 19.369 12.2416C19.369 14.6776 19.369 14.9396 19.326 15.8956H19.315V15.8946Z"
                      fill="black"
                    />
                  </svg>
                  <p className="box-url instagram">
                    <a href="https://www.instagram.com/rotaractlariojacapital/">
                      rotaractlariojacapital
                    </a>
                  </p>
                </Stack>
              </Item>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
