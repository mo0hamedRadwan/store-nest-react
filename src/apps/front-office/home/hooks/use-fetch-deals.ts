// export default function useFetchDeals() {
//   const [data1, setData1] = useState<DealsData[] | []>([]);
//   const [_loading, set_Loading] = useState(true);
//   useEffect(() => {
//     set_Loading(true);
//     getDeals().then(data => {
//       setData1(data);
//       set_Loading(false);
//     });
//   }, []);
//   return { data1, _loading };
// }
