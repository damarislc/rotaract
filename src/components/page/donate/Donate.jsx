import "./Donate.css";
import QuestionAccordion from "./QuestionAccordion";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";

const items = [
  {
    key: "1",
    label:
      "¿Qué tipos de actividades se realizan con las donaciones que se realizan?",
    text: "Rotaract tiene como objetivo la formación de líderes que aspiran a un cambio en la sociedad. Ese cambio lo hacen mediante acciones que se promueven a través de proyectos de servicio. Tus contribuciones se destinan directamente a estos proyectos que están orientados en diferentes temáticas, como la educación, la salud, el bienestar social, el asistencialismo, el fomento de valores, intervenciones comunitarias, el cuidado del medio ambiente y sus recursos. ",
  },
  {
    key: "2",
    label: "¿Cómo hago para sumarme al club? ¿Debo pagar para formar parte?",
    text: "Para sumarte solo debes tener entre 18 y 30 años, y ser de la provincia de La Rioja, Argentina. No debes pagar para sumarte, solo necesitas muchas ganas de ayudar y participar de nuestras reuniones. Únete a nosotros, para que juntos podamos lograr un impacto aún mayor y así mejorar nuestras comunidades.",
  },
];

const Donate = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 500,
  }));

  const questionsAccordion = [];
  items.forEach((item) => {
    questionsAccordion.push(<QuestionAccordion key={item.key} item={item} />);
  });

  return (
    <>
      <div className="header-container ">
        <div className="heart-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="74"
            viewBox="0 0 51 74"
            fill="none"
          >
            <path
              d="M21.9493 20.0659C22.4093 18.3059 22.6493 16.6759 23.2493 15.1959C24.6093 11.8359 25.6293 8.15592 27.7293 5.29592C33.6593 -2.82408 44.0893 -1.35409 47.7693 7.97591C51.4493 17.3059 50.6793 27.0159 49.0293 36.5259C47.3293 46.3259 44.7293 55.9659 42.3893 65.6559C41.9293 67.5459 41.1593 69.5059 40.0093 71.0659C37.8493 74.0159 34.7093 73.4759 32.8393 70.3759C31.9293 68.8659 30.4893 67.5459 29.0293 66.4959C15.8793 57.0059 4.16928 46.4059 0.459276 29.6459C-0.0407237 27.4059 -0.0707286 25.0059 0.0792714 22.7059C0.569271 15.1659 6.57926 11.4659 13.3693 14.6559C16.3093 16.0359 18.9093 18.1359 21.9393 20.0759L21.9493 20.0659ZM32.7493 66.2259C36.0893 53.4359 39.8093 41.8959 41.9093 30.0759C42.9993 23.9659 41.3893 17.3359 40.6393 10.9859C40.4893 9.68592 38.6993 8.57594 37.6693 7.37594C36.4693 8.43594 34.6893 9.2659 34.1893 10.5859C32.9293 13.9659 31.9293 17.5059 31.4193 21.0759C30.8793 24.8359 31.2493 28.7159 30.7593 32.4859C30.5893 33.8359 29.1993 35.9059 28.1393 36.0559C26.4393 36.2959 24.2693 35.6059 22.8393 34.5659C21.4693 33.5659 20.9093 31.5059 19.7693 30.0959C17.2893 27.0159 14.8493 23.8559 11.9893 21.1459C10.9593 20.1659 8.20927 19.6059 7.26927 20.2859C6.16927 21.0759 5.57927 23.5159 5.80927 25.0859C8.37927 42.4959 19.9593 53.9859 32.7393 66.2259H32.7493Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="title">
          <h1>DonÁ y ayudanos</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="263"
            height="36"
            viewBox="0 0 263 36"
            fill="none"
          >
            <path
              d="M262.668 35.7904C247.053 30.2653 231.575 24.3023 215.785 19.2917C177.473 7.12963 138.169 4.61682 98.3238 8.35178C73.41 10.6812 49.1187 16.1537 25.0204 22.6522C17.9713 24.5504 10.8334 26.1477 3.7133 27.7669C2.68305 27.9997 1.50038 27.5829 0.167826 27.4418C-0.27389 22.3067 3.69548 21.098 6.92719 20.1128C22.7758 15.2647 38.5285 9.80319 54.6867 6.30526C87.9506 -0.902005 121.783 -1.04008 155.498 2.02723C192.001 5.34961 226.341 16.6586 259.043 33.0836C260.351 33.745 261.554 34.6266 262.799 35.412L262.656 35.8092L262.668 35.7904Z"
              fill="#009999"
            />
          </svg>
        </div>
        <div className="heart-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="74"
            viewBox="0 0 51 74"
            fill="none"
          >
            <path
              d="M21.9493 20.0659C22.4093 18.3059 22.6493 16.6759 23.2493 15.1959C24.6093 11.8359 25.6293 8.15592 27.7293 5.29592C33.6593 -2.82408 44.0893 -1.35409 47.7693 7.97591C51.4493 17.3059 50.6793 27.0159 49.0293 36.5259C47.3293 46.3259 44.7293 55.9659 42.3893 65.6559C41.9293 67.5459 41.1593 69.5059 40.0093 71.0659C37.8493 74.0159 34.7093 73.4759 32.8393 70.3759C31.9293 68.8659 30.4893 67.5459 29.0293 66.4959C15.8793 57.0059 4.16928 46.4059 0.459276 29.6459C-0.0407237 27.4059 -0.0707286 25.0059 0.0792714 22.7059C0.569271 15.1659 6.57926 11.4659 13.3693 14.6559C16.3093 16.0359 18.9093 18.1359 21.9393 20.0759L21.9493 20.0659ZM32.7493 66.2259C36.0893 53.4359 39.8093 41.8959 41.9093 30.0759C42.9993 23.9659 41.3893 17.3359 40.6393 10.9859C40.4893 9.68592 38.6993 8.57594 37.6693 7.37594C36.4693 8.43594 34.6893 9.2659 34.1893 10.5859C32.9293 13.9659 31.9293 17.5059 31.4193 21.0759C30.8793 24.8359 31.2493 28.7159 30.7593 32.4859C30.5893 33.8359 29.1993 35.9059 28.1393 36.0559C26.4393 36.2959 24.2693 35.6059 22.8393 34.5659C21.4693 33.5659 20.9093 31.5059 19.7693 30.0959C17.2893 27.0159 14.8493 23.8559 11.9893 21.1459C10.9593 20.1659 8.20927 19.6059 7.26927 20.2859C6.16927 21.0759 5.57927 23.5159 5.80927 25.0859C8.37927 42.4959 19.9593 53.9859 32.7393 66.2259H32.7493Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <Container id="donate-main" maxWidth="false">
        <div id="div1">
          <div className="image">
            <img src="/dona-voluntarios.png" alt="voluntarios" />
          </div>
          <div className="content">
            <h1>Somos una organizacion sin fines de lucro</h1>
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
            <p>
              Cada aporte es una gran oportunidad para nosotros y para el
              crecimiento de la comunidad Rotaract
            </p>
            <Box className="box-dir">
              <Item sx={{ my: 1, p: 2 }}>
                <Stack spacing={2} direction="row" alignItems="center">
                  <h2>Doná y ayudanos</h2>
                </Stack>
                <br />
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography noWrap>
                    <b>Titular:</b> Enzo Emmanuel Godoy Vera
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography noWrap>
                    <b>CUIT/CUIL:</b> 20 - 42059212 - 5
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography noWrap>
                    <b>Alias:</b> dona.rotaract
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography noWrap>
                    <b>CBU:</b> 1430001713026301220015
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography noWrap>
                    <b>NRO. CUENTA:</b> 1302630122001
                  </Typography>
                </Stack>
              </Item>
            </Box>
          </div>
        </div>
        <div id="div2">
          <h1>¿Por que contribuir en rotaract?</h1>
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
          <div className="values">
            <div className="value val1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="83"
                viewBox="0 0 83 83"
                fill="none"
              >
                <circle cx="41.25" cy="41.25" r="41.25" fill="#01B4E7" />
                <path
                  d="M20.2963 2.86949C20.2557 2.73361 20.2083 2.60114 20.1644 2.46527C20.0257 2.06444 19.887 1.63644 19.6908 1.2594C19.5115 0.912925 18.9839 0.410208 18.6625 0.28113C17.827 -0.0551529 16.6262 -0.160453 15.8753 0.36605C14.8538 1.07938 13.954 1.95575 13.3012 3.01894C12.3947 4.49655 11.867 6.1372 11.2716 7.76766C10.4869 9.92802 10.2264 12.1767 9.78332 14.371C9.34359 16.5586 8.79562 18.7733 8.80239 21.0763C8.80577 23.0804 8.64341 25.0641 8.49796 27.0648C8.22059 25.3155 7.9466 23.5695 7.59481 21.8338C7.41892 20.9676 7.22612 20.1048 7.00625 19.2488C6.89801 18.8344 6.74918 18.42 6.66461 18.0022C6.54961 17.4417 6.50563 17.0647 6.10649 16.5518C5.82236 16.1849 5.43337 15.9811 5.03423 15.7671C4.16153 15.3018 2.99117 15.3119 2.10156 15.7263C1.83434 15.8486 1.59756 16.0083 1.39461 16.2019C0.833102 16.7352 0.498229 17.5131 0.325719 18.3894C-0.161368 20.8623 -0.0463608 23.4642 0.305424 25.9643C0.592941 28.0329 1.24915 30.054 2.02037 32.0378C3.22794 35.1526 4.03299 38.4101 5.25409 41.542C5.7953 42.9313 6.46166 44.2662 7.02655 45.6453C7.5982 47.0414 7.93984 48.5564 8.39986 50C8.97151 49.9457 9.54317 49.8879 10.1148 49.8336C10.3347 49.8132 10.5681 49.786 10.7372 49.6433C10.9199 49.4905 10.9841 49.2391 11.0383 49.0047C11.9042 45.2207 12.7701 41.4367 13.636 37.6561C14.1603 35.37 14.6813 33.084 15.2056 30.8013C15.3611 30.1254 15.4762 29.6158 15.7806 29.035C16.1865 28.2571 16.3759 27.2856 16.6465 26.45C17.2182 24.6837 17.7797 22.9106 18.304 21.1273C18.8147 19.3881 19.2883 17.6387 19.7077 15.8758C19.9242 14.9587 20.1272 14.0347 20.3064 13.1074C20.4789 12.231 20.7191 11.3071 20.7495 10.4172C20.78 9.54419 20.9796 8.6746 20.9965 7.78804C21.0168 6.84712 20.9491 5.90622 20.8003 4.97889C20.6853 4.26556 20.5162 3.55903 20.3031 2.86949H20.2963ZM17.8236 10.6685C17.2216 14.8262 16.0072 18.8378 14.9857 22.897C14.6271 24.3236 13.9878 25.6789 13.5075 27.075C11.9786 31.5044 10.9063 36.0494 10.2941 40.6928C10.2163 41.2702 10.1453 41.8511 10.037 42.4251C9.93554 42.9516 9.70214 43.468 9.62434 43.9911C9.56684 44.3783 9.68861 44.8063 9.67509 45.2037C9.66494 45.5026 9.63788 45.8016 9.59729 46.1005C9.57361 46.2601 9.39771 46.7391 9.45522 46.8749C7.98719 43.4238 6.5902 39.9455 5.26086 36.44C4.59111 34.6703 3.93828 32.8904 3.30236 31.107C3.03176 30.3428 2.54467 29.446 2.51084 28.6308C2.47363 27.7714 2.20303 26.9562 2.06096 26.107C1.69903 23.9534 1.63138 21.7557 1.72947 19.5749C1.7633 18.8548 2.01361 18.1686 2.44319 17.5538C2.74086 17.1292 2.99793 16.4906 3.54929 16.6503C4.0127 16.7827 4.40169 17.2583 4.55052 17.8595C5.1357 20.2237 5.49087 22.6354 6.03208 25.0064C6.44813 26.8305 6.79315 28.6715 7.12126 30.5126C7.28362 31.4331 7.43922 32.3537 7.5982 33.2776C7.68615 33.7939 7.66246 35.139 8.52501 34.9386C8.78547 34.8775 8.99181 34.6872 9.18123 34.497C9.52963 34.1404 9.86789 33.7497 10.037 33.281C10.1858 32.8768 10.1283 32.5337 10.0573 32.1261C10.01 31.8543 10.0505 31.586 10.0641 31.3142C10.2839 27.1905 10.8488 23.1144 11.319 19.011C11.7452 15.2848 12.4589 11.6094 13.3688 7.97487C13.9303 5.73978 14.9755 3.74245 16.5011 2.01349C16.7615 1.71457 17.0457 1.22544 17.4685 1.38169C17.8406 1.52096 17.8811 2.06104 17.9285 2.45847C18.2634 5.19968 18.2296 7.9307 17.8338 10.6753L17.8236 10.6685Z"
                  fill="white"
                  transform="translate(30,15)"
                />
              </svg>
              <h2>Conectando valores</h2>
              <p>
                Creemos en la fuerza de la comunidad y en la posibilidad de
                generar un cambio significativo cuando trabajamos juntos.
              </p>
            </div>
            <div className="value val2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="83"
                viewBox="0 0 83 83"
                fill="none"
              >
                <circle cx="41.25" cy="41.25" r="41.25" fill="#872175" />
                <path
                  d="M21.5049 26.8898C21.6283 26.7717 21.7684 26.6704 21.9085 26.5827C22.2553 26.3701 22.6588 26.2453 23.0657 26.2352C23.4992 26.2217 23.746 26.3297 24.1562 26.1643C24.8832 25.8708 25.6202 25.6009 26.3372 25.2837C27.7612 24.6629 29.1518 23.9307 30.3824 22.9691C31.3595 22.2032 32.2232 21.2921 32.9002 20.2428C33.9907 18.5423 34.6277 16.5954 35.298 14.6992C36.045 12.587 36.7687 10.468 37.4723 8.34237C38.2694 5.92314 39.0364 3.49719 39.7767 1.06109C39.9868 0.369401 39.3465 -0.0287468 38.7296 0.00162002C34.2675 0.231058 30.1256 2.53556 27.1075 5.80169C23.9661 9.1994 22.1653 13.6093 21.3515 18.1475C20.938 20.4452 20.7813 22.7835 20.798 25.115C18.7837 27.767 16.4459 30.1458 14.1482 32.5583C14.3016 28.6274 13.9781 24.6528 12.7175 20.9143C11.5337 17.412 9.45604 14.2133 6.58804 11.8919C5.05066 10.6503 3.2765 9.68863 1.38229 9.1454C0.905406 9.00707 -0.0450293 9.10154 0.00165894 9.82022C0.261779 13.9704 1.05548 18.0868 2.36609 22.0311C3.02306 24.015 3.81342 25.9518 4.72718 27.8278C5.46085 29.3292 6.27456 30.8273 7.37841 32.0859C8.58897 33.4659 10.1564 34.5355 12.0005 34.748C12.0306 34.7514 12.0606 34.7514 12.0939 34.7548C10.4265 36.5835 8.83908 38.4764 7.48179 40.565C6.36794 42.2756 5.43417 44.1078 4.7772 46.0479C4.50707 46.8408 6.2879 47.4177 6.56136 46.6113C8.33885 41.3646 12.0739 37.2988 15.8423 33.3613C15.9224 33.3478 16.0024 33.3208 16.0724 33.2702C16.0991 33.2533 16.1225 33.2364 16.1491 33.2196C19.2739 35.5848 22.5287 37.9298 26.2972 39.0871C30.2523 40.3018 34.4243 39.8227 38.1527 38.0917C40.2636 37.1099 42.1712 35.7434 43.8553 34.1339C44.3322 33.6784 43.5118 32.8957 43.105 32.7978C39.2532 31.8767 35.4081 30.8813 31.5296 30.0648C27.8812 29.2955 24.1095 28.8198 20.4144 29.5587C19.9876 29.643 19.5674 29.7476 19.1472 29.8691C19.2172 29.7948 19.2873 29.7206 19.354 29.643C20.0109 28.921 20.788 28.2226 21.1881 27.3284C21.2615 27.1665 21.3749 27.0214 21.5049 26.8965V26.8898ZM24.7164 13.0324C26.3005 9.11167 28.9617 5.68021 32.5968 3.51742C34.1608 2.58617 35.8716 1.96196 37.6491 1.67853C36.4919 5.43727 35.2713 9.17578 33.9741 12.8873C33.3104 14.7835 32.7035 16.7371 31.7897 18.5254C30.956 20.1584 29.7588 21.4608 28.2314 22.4562C26.8974 23.3233 25.4334 23.9475 23.9527 24.5178C26.7674 20.1787 29.3619 15.6945 31.7063 11.0754C32.1832 10.134 30.3991 9.61104 29.9555 10.4816C27.7478 14.8308 25.3234 19.0652 22.6888 23.1648C22.8322 19.6996 23.4125 16.2445 24.7131 13.029L24.7164 13.0324ZM6.51134 27.3756C4.81388 23.9003 3.53329 20.1956 2.74959 16.3997C2.37942 14.6013 2.12263 12.7827 1.96256 10.9539C4.52374 12.0438 6.67808 13.9198 8.32217 16.204C10.5832 19.3487 11.7204 23.1749 12.1239 27.0079C12.264 28.3271 12.3174 29.6498 12.314 30.9724C10.2364 27.0956 8.46557 23.0568 7.02824 18.8898C6.73143 18.026 4.90726 18.3736 5.24075 19.3419C6.88484 24.1163 8.96914 28.7253 11.4536 33.1116C9.04918 32.2714 7.57182 29.5519 6.508 27.3756H6.51134ZM36.6653 32.7472C38.2327 33.1217 39.7968 33.4962 41.3641 33.8707C38.7996 36.02 35.6982 37.562 32.3967 38.058C28.5882 38.6316 24.9999 37.4406 21.7451 35.4937C20.9147 34.9977 20.111 34.4579 19.3206 33.8978C23.7126 34.9707 28.168 35.7805 32.6534 36.3203C33.0803 36.371 33.3438 35.9661 33.2337 35.5781C33.1037 35.1158 32.6501 34.8054 32.1966 34.7514C27.441 34.1812 22.7322 33.2938 18.0934 32.1061C23.8627 29.4304 30.7325 31.3301 36.6653 32.7472Z"
                  fill="white"
                  transform="translate(20,18)"
                />
              </svg>
              <h2>Apoyo Integral</h2>
              <p>
                Proporcionamos recursos esenciales que ayuden en la
                administración, la planificación y la ejecución de proyectos
                significativos.
              </p>
            </div>
            <div className="value val3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="83"
                height="83"
                viewBox="0 0 83 83"
                fill="none"
              >
                <circle cx="41.25" cy="41.25" r="41.25" fill="#F7A81B" />
                <path
                  d="M15.0608 19.162C14.3786 19.6851 13.4613 20.0664 13.0647 20.7549C12.2751 22.1217 12.7926 24.1467 13.8981 25.068C16.3545 27.1132 19.9299 25.9556 20.6457 22.8305C21.2237 20.3094 20.7734 17.8795 19.4729 15.6858C17.7726 12.8138 13.9552 12.3143 11.3174 14.6295C8.44764 17.1505 7.52021 20.4174 8.40062 24.0893C9.28775 27.7916 12.0163 29.6174 15.5615 29.9819C24.8192 30.937 34.7087 23.114 32.1078 11.4537C30.5856 4.63638 24.3589 1.3661 17.077 3.25942C9.70442 5.17636 3.95823 12.0814 3.04422 19.6547C1.79754 30.0156 13.5453 39.6307 23.6633 34.9767C27.3361 33.2893 30.6763 30.856 34.1442 28.7264C35.7134 27.7612 37.1819 26.6239 38.7881 25.7396C39.2855 25.4663 40.3642 25.5304 40.6935 25.8881C41.0497 26.2762 41.0967 27.3191 40.8279 27.8456C40.2768 28.9222 39.5946 30.0663 38.6672 30.7952C34.0198 34.4401 29.0499 37.5518 23.3306 39.2629C17.3492 41.0516 12.0634 39.462 7.25137 35.8238C-0.927693 29.641 -2.41295 17.623 3.94817 9.13849C7.67815 4.16389 12.5506 1.01174 18.7639 0.161262C29.023 -1.23595 36.409 6.62082 35.2934 16.9548C34.2046 27.0255 24.1438 33.1847 16.9896 32.4861C12.386 32.0372 8.40062 30.2958 6.59276 25.7025C4.70425 20.9068 5.86019 16.4992 9.39191 12.8138C13.8309 8.1834 21.301 9.63798 23.7641 15.6116C25.2998 19.3375 25.0746 22.9992 22.7056 26.3471C20.7599 29.0943 16.4049 29.6815 13.132 27.7511C10.5075 26.202 9.33812 22.3884 10.7965 19.4556C11.2468 18.5545 12.2079 17.6567 13.1421 17.3024C14.8861 16.6409 15.6892 17.4846 15.4909 19.4151L15.0642 19.1552L15.0608 19.162Z"
                  fill="white"
                  transform="translate(20.5,20.5)"
                />
              </svg>
              <h2>Movimiento Rotaract</h2>
              <p>
                Unimos y fomentamos la colaboración y lo hacemos a través de
                eventos que reúnen a personas con una visión común de un mundo
                mejor.
              </p>
            </div>
          </div>
        </div>
        <div id="div3">
          <div className="content">
            <h1>PREGUNTAS FRECUENTES</h1>
            <svg
              id="preguntas-underline"
              xmlns="http://www.w3.org/2000/svg"
              width="206"
              height="18"
              viewBox="0 0 206 18"
              fill="none"
            >
              <path
                d="M0.427563 17.562C0.729643 16.7631 0.899791 15.8978 1.36295 15.1693C5.06901 9.38945 18.0735 4.91604 26.1309 6.77826C28.5909 7.35001 30.952 8.37368 33.2865 9.32116C40.1683 12.1289 46.3449 11.4615 51.9238 7.72665C53.8514 6.43657 55.6301 4.98714 57.6039 3.73963C62.5659 0.60952 67.6964 0.591076 73.1309 3.67255C74.8735 4.66009 76.647 5.69414 78.1006 6.95046C81.2086 9.62349 84.4919 9.81812 88.0499 8.27325C91.7342 6.67311 95.4363 5.10561 99.0397 3.39166C108.975 -1.32565 115.848 -0.241823 123.209 7.53329C125.22 9.65154 127.445 10.3724 130.253 9.58949C133.3 8.74246 136.329 7.80839 139.247 6.71399C146.559 3.98344 150.733 4.55367 156.847 9.28742C159.756 11.5383 162.806 11.7515 165.999 9.9271C167.657 8.98692 169.299 7.99036 171.093 7.24415C174.486 5.82178 177.636 6.39114 180.416 8.75334C181.46 9.63941 182.479 10.5462 183.514 11.4432C185.345 13.0351 187.393 13.3632 189.885 12.8332C193.95 11.9741 198.083 11.2754 202.227 10.6568C203.128 10.52 204.211 11.0125 205.216 11.2102C204.77 12.0317 204.577 13.3895 203.843 13.5976C198.479 15.1073 193.123 16.89 187.511 17.4955C185.207 17.7428 181.886 15.6512 179.744 13.9987C175.475 10.6956 175.685 10.5188 170.874 13.0348C169.171 13.9265 167.542 14.931 165.736 15.6574C161.913 17.1902 159.2 16.6202 156.317 13.8751C150.583 8.42565 148.36 8.07366 140.775 10.7911C137.296 12.0324 133.605 12.9729 129.9 13.7481C125.813 14.6042 122.293 13.3679 120.123 10.2367C115.851 4.0803 110.56 3.26089 102.756 6.60719C97.7039 8.76995 92.6377 10.9248 87.4396 12.85C83.4372 14.3342 79.8205 13.4292 76.3547 10.8221C67.9823 4.5287 66.8037 4.57321 58.7377 10.2712C48.6266 17.4125 40.258 17.8288 28.323 11.484C24.5107 9.45819 20.8664 8.91808 16.9021 10.2866C14.0436 11.2742 11.0281 12.053 8.38403 13.3178C5.78695 14.5647 3.5662 16.3164 1.17549 17.8455L0.428373 17.5561L0.427563 17.562Z"
                fill="black"
              />
            </svg>
            <p>¿Aún tiene preguntas y necesitas responderlas?</p>
          </div>
          <div className="questions">{questionsAccordion}</div>
        </div>
      </Container>
    </>
  );
};

export default Donate;
