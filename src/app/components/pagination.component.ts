// export default function Pagination(props) {
//   return (
//     <Page aria-label="Page navigation example" className="pagination-check">
//   <PaginationItem onClick={() => props.choosePage(1)} >
//   <PaginationLink first>
//   {'<<'}
//   </PaginationLink>
//   </PaginationItem>
//   {props.page > 1 &&
//   <PaginationItem onClick={() => props.choosePage(props.page - 1)} >
//     <PaginationLink>
//       {props.page - 1}
//     </PaginationLink>
//     </PaginationItem>}
//     <PaginationItem active>
//   <PaginationLink href="#">
//     {props.page}
//     </PaginationLink>
//     </PaginationItem>
//     {props.page < props.lastPage &&
//     <PaginationItem onClick={() => props.choosePage(props.page + 1)}>
//       <PaginationLink>
//         {props.page + 1}
//       </PaginationLink>
//       </PaginationItem>}
//       <PaginationItem onClick={() => props.choosePage(props.lastPage)}>
//       <PaginationLink last>
//       {'>>'}
//       </PaginationLink>
//       </PaginationItem>
//       </Page>
//     );
// }
