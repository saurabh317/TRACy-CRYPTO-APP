import { TableCell } from "@material-ui/core";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { useSelector } from "react-redux";

const WithSort = ({ head, setSortedCoins }) => {
  // const [sortBy, sortOrder] = useSelector(({ coins }) => [coins.filters.sortBy, coins.filters.sortOrder])
  // console.log(sortBy, sortOrder)

  const handleSort = (sortByParam, sortingOrder, coins) => {
    const sorted = [...coins]?.sort((a, b) => {
      if (sortByParam === "price") {
        // Sort by current price
        return sortingOrder === "increasing"
          ? a.current_price - b.current_price
          : b.current_price - a.current_price;
      } else if (sortByParam === "marketCap") {
        // Sort by market capitalization
        return sortingOrder === "increasing"
          ? a.market_cap - b.market_cap
          : b.market_cap - a.market_cap;
      }
      return 0; // No sorting if sortByParam doesn't match
    });

    setSortedCoins(sorted); // Update state with sorted coins
  };

  return (
    <>
      <TableCell
        style={{
          color: "black",
          fontWeight: "700",
          fontFamily: "Montserrat",
        }}
        key={head}
        align={head === "Coin" ? "" : "right"}
        onClick={() => console.log("i")}>
        {head}
        {/* {<UnfoldMoreIcon fontSize="small" />} */}
      </TableCell>
    </>
  );
};

export default WithSort;
