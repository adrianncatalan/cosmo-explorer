<template>
    <div class="footer">
        <h3 class="footer-text">Adrián Catalán | Web Development & Graphic Design</h3>
        <h3 class="footer-text">© {{ year }} by Adrián Catalán</h3>
    </div>
</template>

<script>
export default {
    name: 'FooterShared',
    data() {
        return {
            year: null
        }
    },
    methods: {
        getYear() {
            this.date = new Date().getFullYear()
        }
    },
    created() {
        this.getYear()
    }
}

</script>

<style src="../assets/footer.scss" scoped></style>
