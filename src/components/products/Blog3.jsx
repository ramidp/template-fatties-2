import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from './estiloblog'

const Blog3 = () => {

    const banner = require('../../images/Blog/fatties_1/gente-trabajando-2.jpg')

    return (
        <>
        <ProductContainer>
                <h1 className="title">Blog</h1>
                <p>
                <a
                href="/blog"
                style={{color: 'red',
                cursor: 'pointer',
                textDecoration: 'none'}}>
                Blog
                </a> / Fatties_1</p>

                    <div className="product-types1">
                        <div className="col-12">
                            <h1
                            className="blog-title">
                            Titulo Ejemplo
                            <br />
                            De un Articulo de Fatties
                            </h1>
                            <img src={banner} alt="" />
                        </div>
                            
                            <h3><strong>Tags:</strong> Tag1, Tag2, Tag3</h3>

                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et debitis itaque tenetur iure laudantium nostrum tempore omnis doloremque, commodi impedit culpa esse suscipit! Doloribus et recusandae blanditiis odit odio, quo sit. Reiciendis, exercitationem amet corporis aspernatur recusandae harum molestias magnam libero placeat dicta repellendus error eius soluta voluptate rerum ea, sit rem. Et veniam quos voluptatum magni exercitationem sed sit quo, maiores, itaque alias fugiat soluta enim a dolore placeat. Odio adipisci reprehenderit neque magni molestias ratione aliquam repudiandae atque sequi deserunt maxime dignissimos, illo possimus, provident quo esse voluptatem rerum vel nostrum eligendi vero, quam distinctio? Quisquam, deleniti voluptates.
                        </p> 
                        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, vel?</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat quam dignissimos deleniti maxime autem in, accusamus libero neque animi aut alias, ipsum ipsam sed facilis enim voluptatum exercitationem consequatur aliquam ad! Numquam eligendi consequatur omnis natus atque et tenetur quam dolor error fugit veniam inventore, nulla quae tempora iure cupiditate exercitationem magnam? Quos odio fuga beatae magni, optio, voluptatem nesciunt dolores rem sapiente necessitatibus minus amet aliquid, vel aut placeat vero quisquam dolore quibusdam officia. Quia iste quo sunt illum delectus, tempora aliquam, velit laborum deleniti, consectetur suscipit iusto vel voluptatem beatae fuga ex nulla provident asperiores adipisci? Facere aliquam debitis, minus eaque expedita maiores excepturi provident cumque vitae magni sequi repudiandae dolorum nihil adipisci. Ullam, nam! Maiores tempora vel officia perspiciatis fugiat illum. Perferendis repudiandae harum nostrum, quos deleniti corrupti doloremque totam non officiis expedita maiores! Ducimus dolorum tempore nobis necessitatibus, harum eos autem repellendus inventore placeat quae quam commodi incidunt velit saepe earum quibusdam aut molestiae odit sunt quis et! Veritatis aliquid ad magnam cum amet doloribus, voluptatem fugit nemo, vel eaque tenetur, consequatur voluptatibus dolorum accusantium officia non quaerat obcaecati facilis suscipit nihil quisquam qui debitis! Doloremque neque quas nemo voluptate quam temporibus nulla quae incidunt ipsum deleniti provident perspiciatis est eligendi, dicta ea sed repellendus! Aut in pariatur, ut suscipit perferendis id harum temporibus nesciunt cumque hic maxime, cupiditate consequuntur? Animi, ipsam. Labore sunt sed praesentium dolor cupiditate aspernatur, fugit minus quis iste architecto atque nihil cum necessitatibus dolorum error veritatis. Illo eum quisquam cumque deleniti laudantium saepe aspernatur voluptate laborum vero! Consequuntur ex aliquam modi, voluptas optio recusandae qui adipisci et, mollitia earum suscipit vitae beatae quam amet. Quas quo corporis esse, illum impedit placeat, quasi, velit sequi at suscipit eligendi neque? Doloribus, fuga quis. Totam, voluptatibus? Aspernatur provident dolores exercitationem corrupti aut ratione aliquid!</p>
                    </div>
        </ProductContainer>
        </>
    );
}
 
export default Blog3;
