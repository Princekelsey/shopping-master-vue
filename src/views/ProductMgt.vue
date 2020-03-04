<template>
  <div>
    <Intro
      image="/img/svg/product2.svg"
      title="Products page"
      text="Products Catalog"
    />
    <hr />

    <div class="product-test">
      <h3 class="d-inline-block">Products list</h3>
      <button
        @click="addNew"
        class="btn btn-info float-right"
        data-target="#product"
        data-toggle="modal"
      >
        Add Product
      </button>

      <div class="table-responsive">
        <table class="table table-striped table-bordered ">
          <thead class="">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Modify</th>
            </tr>
          </thead>

          <tbody>
            <tr :key="product.name" v-for="product in products">
              <td>{{ product.name }}</td>

              <td>{{ product.price }}</td>

              <td>
                <i
                  @click="editProduct(product)"
                  class="fas fa-edit mr-2 text-primary pointer"
                  data-target="#product"
                  data-toggle="modal"
                ></i>
                <i
                  @click="deleteProduct(product)"
                  class="fas fa-trash-alt text-danger pointer"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="product"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">{{ modalState }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <!-- main product -->
              <div class="col-md-8">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product Name"
                    v-model="product.name"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <vue-editor v-model="product.description"></vue-editor>
                </div>
              </div>
              <!-- product sidebar -->
              <div class="col-md-4">
                <h4 class="display-6">Product Details</h4>
                <hr />

                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Product price"
                    v-model="product.price"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    @keyup.188="addTag"
                    placeholder="Product tags"
                    v-model="tag"
                    class="form-control"
                  />

                  <div class="d-flex">
                    <p :key="tag" v-for="tag in product.tags">
                      <span class="p-1">{{ tag }}</span>
                    </p>
                  </div>
                </div>

                <div class="form-group">
                  <label for="product_image">Product Images</label>
                  <input type="file" @ class="form-control" />
                </div>

                <div class="form-group d-flex">
                  <div
                    class="p-1"
                    :key="index"
                    v-for="(image, index) in product.images"
                  >
                    <div class="img-wrapp">
                      <img :src="image" alt width="80px" />
                      <!-- <span class="delete-img" @click="deleteImage(image,index)">X</span> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>

            <button
              @click="addProduct()"
              type="button"
              class="btn btn-info"
              v-if="modal == 'new'"
              data-dismiss="modal"
            >
              Add Product
            </button>

            <button
              @click="updateProduct()"
              type="button"
              data-dismiss="modal"
              class="btn btn-info"
              v-else
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { db } from "../firebase";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});

export default {
  name: "ProductMgt",
  data() {
    return {
      products: [],
      product: {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      },
      activeItem: null,
      modal: null,
      tag: null,
      modalState: null
    };
  },
  components: {
    VueEditor
  },

  firestore() {
    return {
      products: db.collection("products")
    };
  },
  methods: {
    addNew() {
      this.modalState = "Add New Product";
      this.modal = "new";
    },
    addProduct() {
      this.$firestore.products.add(this.product);
      Toast.fire({
        type: "success",
        title: "Product Created successfully"
      });
      this.reset();
    },
    deleteProduct(doc) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.$firestore.products.doc(doc.id).delete();
          Toast.fire({
            type: "success",
            title: "Deleted  successfully"
          });
        }
      });
    },
    editProduct(product) {
      this.product = product;
      this.modalState = "Edit Product";
      this.modal = "edit";
    },
    updateProduct() {
      this.$firestore.products.doc(this.product.id).update(this.product);
      Toast.fire({
        type: "success",
        title: "Updated  successfully"
      });
      this.reset();
    },
    reset() {
      this.product = {
        name: null,
        description: null,
        price: null,
        tags: [],
        images: []
      };
    }
  }
};
</script>

<style scoped lang="scss">
.img-wrapp {
  position: relative;
}
.img-wrapp span.delete-img {
  position: absolute;
  top: -14px;
  left: -2px;
}
.img-wrapp span.delete-img:hover {
  cursor: pointer;
}
.pointer {
  cursor: pointer;
}
</style>
