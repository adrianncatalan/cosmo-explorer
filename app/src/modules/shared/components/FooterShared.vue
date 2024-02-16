<template>
    <div class="footer">
        <h3 class="footer-text">{{ year }} Adrián Catalán | Web Development & Graphic Design</h3>
        <h3 class="footer-text">© All copyrights and intellectual property rights belong to NASA. This site is not affiliated with or endorsed by NASA.</h3>
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
            this.year = new Date().getFullYear()
        }
    },
    mounted() {
        this.getYear()
    }
}

</script>

<style src="../assets/footer.scss" scoped></style>
