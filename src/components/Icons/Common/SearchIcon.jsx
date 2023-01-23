const SearchIcon = ({ color = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 21 21" height="21" width="21">
    <path
      d="M17.182 8.9286C17.182 13.2905 13.5766 16.8572 9.09101 16.8572C4.6054 16.8572 1 13.2905 1 8.9286C1 4.56667 4.6054 1 9.09101 1C13.5766 1 17.182 4.56667 17.182 8.9286Z"
      stroke={color}
      strokeWidth="2"
    />
    <path d="M14.9089 15L19.9999 20" stroke={color} strokeWidth="2" />
  </svg>
);

export default SearchIcon;
