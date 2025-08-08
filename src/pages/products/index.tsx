import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BUTTON_CLASS_NAME, GRADIENT_BG, PADDING } from '../../styles';
import { PAGE_HEADER_TEXT, PAGINATION_INITIAL_DATA } from '../../constants';
import { MainHeader, CustomInput, CustomButton, TableComponent } from '../../components';
import { ProductCard } from '../../components/card/products';
import { TableColumnType } from '../../types';
import { ICONS } from '../../assets';

export const dummyProducts = [
  {
    id: 1,
    title: 'Wireless Headphones',
    image: 'https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg',
    price: 129.99,
    category: 'Electronics',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    title: 'Smartwatch Pro',
    image: 'https://images.pexels.com/photos/32977238/pexels-photo-32977238.jpeg',
    price: 199.99,
    category: 'Wearables',
    rating: 4.8,
    inStock: false,
  },
  {
    id: 3,
    title: 'Gaming Mouse',
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
    price: 49.99,
    category: 'Accessories',
    rating: 4.2,
    inStock: true,
  },
  {
    id: 4,
    title: '4K Monitor',
    image:
      'https://d12a36ei86qcqy.cloudfront.net/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/m/o/monitor-s2725qc-gray-gallery-1.jpg',
    price: 299.99,
    category: 'Displays',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
    title: 'Mechanical Keyboard',
    image: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
    price: 89.99,
    category: 'Accessories',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 6,
    title: 'Bluetooth Speaker',
    image: 'https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg',
    price: 59.99,
    category: 'Audio',
    rating: 4.3,
    inStock: true,
  },
  {
    id: 7,
    title: 'Fitness Tracker Band',
    image: 'https://m.media-amazon.com/images/I/71CQ6esBqFL.jpg',
    price: 79.99,
    category: 'Wearables',
    rating: 4.0,
    inStock: false,
  },
  {
    id: 8,
    title: 'Tablet Stand',
    image: 'https://images.pexels.com/photos/6373028/pexels-photo-6373028.jpeg',
    price: 25.0,
    category: 'Accessories',
    rating: 4.1,
    inStock: true,
  },
  {
    id: 9,
    title: 'USB-C Hub',
    image: 'https://images.pexels.com/photos/4195398/pexels-photo-4195398.jpeg',
    price: 39.99,
    category: 'Electronics',
    rating: 4.4,
    inStock: true,
  },
  {
    id: 10,
    title: 'Portable SSD 1TB',
    image: 'https://images.pexels.com/photos/13595095/pexels-photo-13595095.jpeg',
    price: 149.99,
    category: 'Storage',
    rating: 4.9,
    inStock: true,
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [productList] = useState(dummyProducts);
  const [isGridView, setIsGridView] = useState(true);
  const [paginationData, setPaginationData] = useState(PAGINATION_INITIAL_DATA);

  const filteredProducts = productList.filter(product =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Define table columns
  const productTableColumns: TableColumnType<(typeof dummyProducts)[0]> = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (_, rec) => <div>{`$${rec.price.toFixed(2)}`}</div>,
    },
    { title: 'Rating', dataIndex: 'rating', key: 'rating' },
    {
      title: 'Stock',
      dataIndex: 'inStock',
      key: 'inStock',
      render: (_, rec) =>
        rec.inStock ? (
          <span className="text-green-600">In Stock</span>
        ) : (
          <span className="text-red-500">Out of Stock</span>
        ),
    },
  ];

  return (
    <div
      className={`relative h-full w-full overflow-scroll md:overflow-auto ${PADDING.horizontalPadding}`}
    >
      <MainHeader className="mb-[2vh] md:h-[8vh]" title={PAGE_HEADER_TEXT.products} />

      {/* Search + Add + Toggle Button */}
      <div className="mb-4 mt-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 gap-3">
          <div className="w-full md:w-3/4">
            <CustomInput
              onChange={e => setSearchText(e.target.value)}
              required
              value={searchText}
              type="text"
              placeholder="Search products..."
              // className='max-w-sm'
            />
          </div>
        </div>
        <CustomButton
          buttonText="+ Add Product"
          onClick={() => navigate('/add-product')}
          className={`${BUTTON_CLASS_NAME.commonButton} ${GRADIENT_BG.gradientToLeft} w-full max-w-max text-white sm:w-auto`}
        />
      </div>

      <div className="mb-4 mt-4 flex w-full items-end justify-end">
        <CustomButton
          buttonText={''}
          iconForBtn={isGridView ? ICONS.table : ICONS.grid}
          onClick={() => setIsGridView(prev => !prev)}
          className={`w-8 max-w-8 text-black`}
        />
      </div>
      <div className="overflow-auto pb-2 will-change-scroll md:h-[80vh] md:overflow-scroll">
        {isGridView ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                  rating={product.rating}
                  inStock={product.inStock}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">No products found.</p>
            )}
          </div>
        ) : (
          <TableComponent
            dataSource={filteredProducts}
            columns={productTableColumns}
            loading={false}
            onRowClick={row => console.log('Clicked:', row)}
            paginationData={paginationData}
            setPaginationData={setPaginationData}
            headerText="" // optional
          />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
