import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailItem from '../../components/DetailItem';
import suiviData from '../../utils/data'; // Import your data fetching method

const MoreDetails = () => {
  let { id } = useParams();
  const [item, setItem] = useState(null); // State to hold the item details

  useEffect(() => {
    // Assuming you have a function to fetch data based on id from suiviData or an API
    const fetchItem = async () => {
      // Example: Fetching item details from suiviData array
      const selectedItem = suiviData.find(data => data.id === parseInt(id));
      setItem(selectedItem);
    };

    fetchItem();
  }, [id]);

  if (!item) return <div>Loading...</div>; // Optional loading state

  return (
    <DetailItem item={item} />
  );
};

export default MoreDetails;
