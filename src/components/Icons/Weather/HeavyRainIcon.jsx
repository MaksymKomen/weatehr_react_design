const CloudyIcon = ({ color = '#000000' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    stroke={color}
  >
    <g fill="none" fillRule="evenodd" strokeLinecap="round">
      <path
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 14l-1-.027c-2.25-.249-4-2.157-4-4.473C1 7.015 3.015 5 5.5 5c.328 0 .649.035.957.102C7.411 2.699 9.757 1 12.5 1c3.435 0 6.247 2.664 6.484 6.039.168-.026.34-.039.516-.039 1.933 0 3.5 1.567 3.5 3.5 0 1.763-1.303 3.221-3 3.464V14h-2.5"
      />
      <path d="M2 21.5L4 17.5M5 21.5L7 17.5M15 21.5L17 17.5M18 21.5L20 17.5" />
      <path strokeLinejoin="round" d="M9 14.5L11 16 9.5 21.5 15 15 13 14 14.5 8.5z" />
    </g>
  </svg>
);

export default CloudyIcon;
