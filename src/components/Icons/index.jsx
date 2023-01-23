import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
  RadarIcon,
  SearchIcon,
  TrashIcon,
  BRLogo,
  LoadingIcon,
  NoResultsIcon,
} from "./Common";

import {
  CloudyIcon,
  DrizzleIcon,
  PartlyCloudyIcon,
  RainIcon,
  SnowIcon,
  SunnyIcon,
  ThunderstormIcon,
  ScatteredCloudsIcon,
  WindIcon,
  SunIcon,
  MoonIcon,
  PrecipIcon,
  FogIcon,
} from "./Weather";

const Icon = ({ name, color }) => {
  let IconComponent = null;

  switch (name) {
    // Common Icons
    case "br-logo":
      IconComponent = BRLogo;
      break;
    case "search":
      IconComponent = SearchIcon;
      break;
    case "trash":
      IconComponent = TrashIcon;
      break;
    case "loading":
      IconComponent = LoadingIcon;
      break;
    case "no-results":
      IconComponent = NoResultsIcon;
      break;
    case "radar":
      IconComponent = RadarIcon;
      break;
    case "close":
      IconComponent = CloseIcon;
      break;
    case "sun":
      IconComponent = SunIcon;
      break;
    case "fog":
      IconComponent = FogIcon;
      break;
    case "moon":
      IconComponent = MoonIcon;
      break;
    case "arrow-left":
      IconComponent = ArrowLeftIcon;
      break;
    case "arrow-right":
      IconComponent = ArrowRightIcon;
      break;
    case "precipitation":
      IconComponent = PrecipIcon;
      break;

    //Weather
    case "Rain":
      IconComponent = RainIcon;
      break;
    case "Cloudy":
      IconComponent = CloudyIcon;
      break;
    case "Fog":
      IconComponent = FogIcon;
      break;
    case "Clear":
      IconComponent = SunnyIcon;
      break;
      case "Snow":
        IconComponent = SnowIcon;
        break;
    // Weather Icons
    case "01d":
    case "01n":
      IconComponent = SunnyIcon;
      break;
    case "02d":
    case "02n":
      IconComponent = ScatteredCloudsIcon;
      break;
    case "03d":
    case "03n":
      IconComponent = PartlyCloudyIcon;
      break;
    case "04d":
    case "04n":
      IconComponent = CloudyIcon;
      break;
    case "09d":
    case "09n":
      IconComponent = DrizzleIcon;
      break;
    case "10d":
    case "10n":
      IconComponent = RainIcon;
      break;
    case "11d":
    case "11n":
      IconComponent = ThunderstormIcon;
      break;
    case "13d":
    case "13n":
      IconComponent = SnowIcon;
      break;
    case "50d":
    case "50n":
      IconComponent = WindIcon;
      break;
    default:
      return <></>;
  }

  return <IconComponent name={name} color={color} />;
};

export default Icon;
