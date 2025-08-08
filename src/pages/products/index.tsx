import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BUTTON_CLASS_NAME, GRADIENT_BG, PADDING } from '../../styles';
import { PAGE_HEADER_TEXT, PAGINATION_INITIAL_DATA } from '../../constants';
import { MainHeader, CustomInput, CustomButton, TableComponent } from '../../components';
import { ProductCard } from '../../components/card/products';
import { TableColumnType } from '../../types';
import { ICONS } from '../../assets';
import { DUMMY_PRODUCT_ARRAY } from '../../constants/product';

const ProductsPage = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [productList] = useState(DUMMY_PRODUCT_ARRAY);
  const [isGridView, setIsGridView] = useState(true);
  const [paginationData, setPaginationData] = useState(PAGINATION_INITIAL_DATA);

  const filteredProducts = productList.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Define table columns
  const productTableColumns: TableColumnType<(typeof DUMMY_PRODUCT_ARRAY)[0]> = [
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
          <span className='text-green-600'>In Stock</span>
        ) : (
          <span className='text-red-500'>Out of Stock</span>
        ),
    },
  ];

  return (
    <div
      className={`relative h-full w-full overflow-scroll md:overflow-auto ${PADDING.horizontalPadding}`}
    >
      <MainHeader className='mb-[2vh] md:h-[8vh]' title={PAGE_HEADER_TEXT.products} />

      {/* Search + Add + Toggle Button */}
      <div className='mb-4 mt-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex flex-1 gap-3'>
          <div className='w-full md:w-3/4'>
            <CustomInput
              onChange={(e) => setSearchText(e.target.value)}
              required
              value={searchText}
              type='text'
              placeholder='Search products...'
              // className='max-w-sm'
            />
          </div>
        </div>
        <CustomButton
          buttonText='+ Add Product'
          onClick={() => navigate('/add-product')}
          className={`${BUTTON_CLASS_NAME.commonButton} ${GRADIENT_BG.gradientToLeft} w-full max-w-max text-white sm:w-auto`}
        />
      </div>

      <div className='mb-4 mt-4 flex w-full items-end justify-end'>
        <CustomButton
          buttonText={''}
          iconForBtn={isGridView ? ICONS.table : ICONS.grid}
          onClick={() => setIsGridView((prev) => !prev)}
          className={`w-8 max-w-8 text-black`}
        />
      </div>
      <div className='overflow-auto pb-2 will-change-scroll md:h-[80vh] md:overflow-scroll'>
        {isGridView ? (
          <div className='grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5 xl:gap-6'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
              <p className='col-span-full text-center text-gray-500'>No products found.</p>
            )}
          </div>
        ) : (
          <TableComponent
            dataSource={filteredProducts}
            columns={productTableColumns}
            loading={false}
            onRowClick={(row) => console.log('Clicked:', row)}
            paginationData={paginationData}
            setPaginationData={setPaginationData}
            headerText='' // optional
          />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
