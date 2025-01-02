import type { CollectionConfig } from 'payload'

export const Product: CollectionConfig = {
  slug: 'product',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nama produk',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      required: true,
    },
    {
      name: 'image',
      type: 'text',
      label: 'Gambar produk',
      required: true,
    },
    {
      name: 'desc',
      type: 'textarea',
      label: 'Deskripsi produk',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      label: 'Harga',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Kategori produk',
      options: [
        {
          label: 'Makanan',
          value: 'food',
        },
        {
          label: 'Minuman',
          value: 'drink',
        },
      ],
    },
  ],
}
