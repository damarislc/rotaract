import { Box, Paper, Stack, styled } from "@mui/material";
import "./Testimonios.css";
import Carousel from "react-material-ui-carousel";
import { testimoniosData } from "../../../data.js";
import { useMediaQuery } from "react-responsive";

const Testimonios = () => {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
    maxWidth: 500,
  }));

  const testimonios = testimoniosData.map((item) => (
    <Box className="box-testimonio" key={item.id} id={"testimonio" + item.id}>
      <Item sx={{ p: 2 }}>
        <div className="testimonio-image">
          <svg
            width="116"
            height="111"
            viewBox="0 0 116 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M115.835 45.9298C115.39 40.5576 114.055 35.2419 111.957 30.2713C109.859 25.3133 107.005 20.644 103.464 16.5584C99.9106 12.4539 95.7024 8.9331 90.9474 6.25327C85.3152 3.08391 79.0091 1.28899 72.6014 0.498219C66.2953 -0.279999 59.8622 -0.116824 53.5752 0.780637C48.0892 1.56513 42.6985 2.97094 37.524 4.94159C32.3813 6.89341 27.4928 9.44773 22.973 12.5543C18.5232 15.617 14.5056 19.2633 11.092 23.4243C7.64017 27.6292 4.89397 32.3675 3.00597 37.4447C1.04804 42.7165 0.0881705 48.321 0.0055307 53.9254C-0.0771091 59.5549 0.768339 65.197 2.40842 70.588C4.05486 75.9916 6.54041 81.1567 9.76336 85.8135C13.0054 90.4954 17.042 94.6438 21.5872 98.1081C26.1769 101.604 31.2815 104.434 36.6849 106.524C42.1455 108.633 47.8476 110.007 53.6769 110.635C59.5888 111.269 65.6088 111.08 71.4635 110.045C77.9284 108.903 84.1328 106.562 89.3518 102.577C94.1258 98.9302 97.9463 94.1668 101.099 89.1209C102.174 87.4013 103.197 85.6378 104.163 83.8366C105.549 81.9852 106.833 80.0647 108.003 78.0753C110.87 73.2051 113.076 67.9333 114.436 62.4607C115.771 57.0759 116.299 51.4589 115.835 45.9236V45.9298ZM106.941 71.5922C105.638 75.4205 103.979 79.161 102.066 82.7571C100.063 85.4181 97.851 87.9222 95.4608 90.2381C86.9298 98.4784 75.7163 104.848 63.7208 106.179C52.5899 107.409 41.7513 103.455 32.9279 96.9094C23.7358 90.1 16.3618 80.8053 11.2382 70.6885C8.39663 65.0778 6.25438 59.0591 5.54241 52.802C4.90672 47.2541 5.45977 41.6308 7.36684 36.3653C7.52576 35.9322 7.69103 35.5118 7.86902 35.085C9.8333 31.4951 12.1917 28.1061 14.868 24.9995C15.3193 24.5853 15.7897 24.1899 16.2729 23.8071C16.5017 23.6251 16.5907 23.3678 16.5716 23.1042C18.8093 20.7193 21.244 18.5102 23.8503 16.5207C32.5084 9.89332 43.0354 5.80767 53.9947 5.18008C65.3164 4.53366 76.7906 7.3139 86.3895 13.3137C95.7341 19.1566 102.797 28.1689 106.598 38.3861C108.492 43.4822 109.573 48.8481 109.732 54.2768C109.904 60.1888 108.867 66.0003 106.96 71.5985L106.941 71.5922ZM87.1714 101.416C82.105 105.169 76.0341 107.215 69.8298 108.212C64.223 109.11 58.4827 109.179 52.8441 108.514C41.9102 107.227 31.2179 102.997 22.5789 96.2316C13.8572 89.4096 7.5766 80.071 4.4935 69.5211C2.40208 62.3728 1.81726 54.7726 2.917 47.4235C2.87886 49.3439 2.97419 51.2644 3.2094 53.166C4.01037 59.624 6.22256 65.8497 9.20395 71.6298C11.9819 77.0209 15.3448 82.1421 19.2479 86.8051C22.9603 91.2422 27.1686 95.3153 31.8791 98.7231C36.5005 102.068 41.586 104.779 47.053 106.493C52.7424 108.275 58.737 108.827 64.6616 108.131C71.2029 107.365 77.5343 105.081 83.2809 101.949C87.4638 99.6708 91.3861 96.9219 94.9586 93.7902C92.6892 96.627 90.121 99.2315 87.1777 101.409L87.1714 101.416ZM112.033 62.2222C111.747 63.333 111.429 64.4376 111.073 65.5296C111.874 61.6448 112.23 57.6847 112.065 53.7057C111.83 48.0888 110.628 42.4969 108.601 37.2502C106.566 31.9847 103.693 27.0141 100.095 22.6398C96.408 18.1525 91.9963 14.3304 87.0252 11.2929C81.9905 8.21764 76.4155 5.9834 70.6561 4.62152C64.9158 3.26591 58.9404 2.76384 53.0539 3.18433C52.1385 3.24709 51.2295 3.34123 50.3268 3.44792C51.738 3.1655 53.1556 2.92701 54.5732 2.72618C66.5242 1.05678 79.5368 2.07348 90.1464 8.15488C99.1478 13.3137 106.001 21.7549 109.897 31.219C113.959 41.0848 114.665 51.9045 112.04 62.2222H112.033Z"
              fill="black"
            ></path>
            <mask
              id={"mask0_384_65" + item.id}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="105"
              height="105"
            >
              <circle cx="52.3295" cy="52.3295" r="52.3295" fill="#D9D9D9" />
            </mask>
            <g mask={"url(#mask0_384_65" + item.id + ")"}>
              <rect
                x="-66.54"
                y="-29.1833"
                width="155"
                height="155"
                fill={"url(#pattern0" + item.id + ")"}
                transform="translate(75,8)"
              />
            </g>
            <defs>
              <pattern
                id={"pattern0" + item.id}
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref={"#image0_384_65" + item.id}
                  transform="matrix(0.0002663 0 0 0.000244583 0 -0.000905988)"
                />
              </pattern>
              <image
                id={"image0_384_65" + item.id}
                width="2730"
                height="4096"
                xlinkHref={item.imgUrl}
              />
            </defs>
          </svg>
        </div>

        <Stack>
          <p className="box-name">{item.name}</p>
        </Stack>
        <Stack>
          <p className="box-opinion">{item.opinion}</p>
        </Stack>
      </Item>
    </Box>
  ));

  /**
   * Media queries para cambiar la estructura según el tamaño de la pantalla
   */
  //const isMobileScreen = useMediaQuery({ query: "(max-width: 450px)" });
  const isMediumSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  //const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });
  /**
   * Variable para decidir la cantidad de elementos que se verán en el carousel
   */
  let sliderItems = testimonios.length > 3 ? 3 : testimonios.length;
  const items = [];
  /**
   * Si la pantalla es de tamaño pequeño, solo ver 2 elementos (para mobile será 1 solo)
   */
  sliderItems = isMediumScreen ? 2 : sliderItems;
  for (let i = 0; i < testimonios.length; i += sliderItems) {
    if (i % sliderItems === 0) {
      items.push(
        testimonios.slice(i, i + sliderItems).map((data, index) => {
          return (
            <div className="slice" key={index}>
              {data}
            </div>
          );
        })
      );
    }
  }
  return (
    <div id="testimonios-main">
      <h2>Testimonios</h2>
      <Carousel
        className="testimonios-carousel"
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        indicators={false}
      >
        {isMediumSmallScreen ? testimonios : items}
      </Carousel>
    </div>
  );
};

export default Testimonios;
