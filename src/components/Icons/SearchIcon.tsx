interface Props {
  style: {
    fill: string
  }
}

export const SearchIcon: React.FC<Props> = ({style}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
        fill="none"
        stroke={style.fill}
        strokeMiterlimit={10}
        strokeWidth={52}
      />
      <path
        fill="none"
        stroke={style.fill}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={52}
        d="M338.29 338.29L448 448"
      />
    </svg>
  )
}
