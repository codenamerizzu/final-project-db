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
      type: 'upload',
      label: 'Gambar produk',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'desc',
      type: 'richText',
      label: 'Deskripsi produk',
      required: true,
    },
  ],
}
