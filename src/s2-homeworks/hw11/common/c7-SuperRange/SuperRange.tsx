import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        height: 56,
        width:147,
        "& .MuiSlider-thumb": {
          color: "#01CB22",
          borderWidth: "7px",
          borderStyle: "solid",
          borderColor: "white",
          outlineWidth: 1,
          outlineColor: "#01CB22",
          outlineStyle: "solid",
          "&:hover": {
            boxShadow: "none",
          },
        },
        "& .MuiSlider-track": {
          height: 4,
          borderRadius: 10,
          backgroundColor: "#01CB22", // Цвет трека
        },
        "& .MuiSlider-rail": {
          height: 4,
          borderRadius: 10,
          backgroundColor: "#8b8b8b", // Цвет рельса
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
