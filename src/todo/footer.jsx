import '../assets/styles/footer.styl'

export default {
    data() {
        return {
            author: 'LH'
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Writren by {this.author}</span>
            </div>
        )
    }
}