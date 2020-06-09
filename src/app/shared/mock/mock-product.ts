import { Product } from "../models/product.model";
import { fas } from '@fortawesome/free-solid-svg-icons';

export const PRODUCTS: Array<Product> = [
    {

        // basic
        _id: 'xxxx',
        title: 'Profhilo',
        link: "profhilo",
        manufacturer: "IBSA",
        deliveryTime: "3-4 days",
        availability: true,
        quantity:0,


        // img
        basicImgUrl: 'https://5.imimg.com/data5/AH/XC/LB/SELLER-75007561/profhilo-h-plus-l-500x500.png',
        imgs: ['https://cdn.shopify.com/s/files/1/0374/7286/2341/products/PROFHILO-PACK-HR_1024x1024@2x.jpg?v=1587373711'],

        // Brief description
        shortDescription: `
            <p>
                The first of its kind, Profhilo® is a revolutionary 'beneath the skin' hyaluronic acid moisturising
                treatment, made with the patented NAHYCO® technology. This results in a unique hyaluronic acid
                injectable gel, which has a prolonged stimulating activity on the dermal cells. When injected into
                skin,
                Profhilo stimulates the skin cell receptors to counteract skin laxity and improve and restore
                firmness
                of the skin.
            </p>
        `,
        fullDescription: `
            <!-- row -->
            <div class="row">

                <div class="col-md-8">
                    <h4>Description</h4>
                    <div>
                        <p>
                            One of the highest concentrations of hyaluronic acid on the market, Profhilo not only boosts and
                            hydrates the skin, but also remodels ageing and sagging tissue. The most common areas of
                            treatment include the face and neck and can also be used for the décolletage, hands, arms, knees
                            and abdomen area where it would effectively treat skin laxity. The treatment is suitable for men
                            and women as well as offering skin benefits for patients of all ages.
                        </p>
                        <ul>
                            <li>Materials: Cartons/Plastic</li>
                            <li>Weight: 100g</li>
                            <!-- <li>built-in drip tray</li> -->
                            <!-- <li>Open base for pots and pans</li> -->
                            <li>On request available in propane execution</li>
                        </ul>
                    </div>
                    <h4>Specifications</h4>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="row" colspan="2">Basic specs</th>
                            </tr>
                            <tr>
                                <td>Ingredients</td>
                                <td>
                                    3.2% - 32 mg (H-HA) + 32 mg (L-HA)/2 ml Hyaluronic acid sodium salt. 2 ml pre-filled
                                    syringe + 2 needles.

                                </td>
                            </tr>
                            <tr>
                                <td>Extra info</td>
                                <td>
                                    To be sold by medical prescription only.
                                    The intradermical injection may only be administered by a medical practitioner.

                                </td>
                            </tr>
                            <tr>
                                <th scope="row" colspan="2">Dimensions</th>
                            </tr>
                            <tr>
                                <td>Width</td>
                                <td>500mm</td>
                            </tr>
                            <tr>
                                <td>Depth</td>
                                <td>400mm</td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>700mm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-4">
                    <h4>Files</h4>
                    <ul>
                        <li><a target="_blank"
                                href="http://greggyqc.nazwa.pl/docs/europeanemp/images/PROFHILO_PACK_MULTILINGUA_12876_EDIII_01-17_VISIONE_300117.pdf">Profhilo</a>
                        </li>
                    </ul>
                    <h4>Videos</h4>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <!-- assets/PROFHILO_PACK_MULTILINGUA_12876_EDIII_01-17_VISIONE_300117.pdf#view=fitH,100 -->
            <!-- http://greggyqc.nazwa.pl/docs/europeanemp/images/PROFHILO_PACK_MULTILINGUA_12876_EDIII_01-17_VISIONE_300117.pdf#view=fitH,100 -->
            <!-- row -->
            <div class="row">
                <div class="col-md-12">
                    <iframe src="assets/PROFHILO_PACK_MULTILINGUA_12876_EDIII_01-17_VISIONE_300117.pdf#view=fitH,100"
                        width="100%" height="680px" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"
                        style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"
                        allowfullscreen>
                        This browser does not support PDFs. Please download the PDF to view it: Download PDF
                    </iframe>
                </div>
                <div class="col-md-12">
                    <!-- <iframe width="100%" height="500px"
                        src="http://www.africau.edu/images/default/sample.pdf#toolbar=0&view=fitH,100">
                        This browser does not support PDFs. Please download the PDF to view it: Download PDF
                    </iframe> -->

                    <!-- <embed src="http://www.africau.edu/images/default/sample.pdf#toolbar=0&view=fitH,100" type="application/pdf" width="100%" height="550px"> -->
                </div>
            </div>
        `,

        // prices
        unitPrice: 125,
        discount: 0,
        // quantity: 0,

        // others
        visible: true,
        bestSeller: true,
    },
    // {
    //     _id: 'yyyy',
    //     title: 'Profhilo Y',
    //     basicImgUrl: 'https://5.imimg.com/data5/AH/XC/LB/SELLER-75007561/profhilo-h-plus-l-500x500.png',
    //     imgs: ['https://cdn.shopify.com/s/files/1/0374/7286/2341/products/PROFHILO-PACK-HR_1024x1024@2x.jpg?v=1587373711'],
    //     description: "",
    //     link: "profhilo-y",
    //     unitPrice: 10,
    //     discount: 13,
    //     quantity: 1,
    //     visible: true,
    //     bestSeller: true,
    // },
    // {
    //     _id: 'zzzz',
    //     title: 'Profhilo Z',
    //     basicImgUrl: 'https://cdn.shopify.com/s/files/1/0374/7286/2341/products/PROFHILO-PACK-HR_1024x1024@2x.jpg?v=1587373711',
    //     imgs: ['https://cdn.shopify.com/s/files/1/0374/7286/2341/products/PROFHILO-PACK-HR_1024x1024@2x.jpg?v=1587373711'],
    //     description: '<h3>Standardowy fragment Lorem Ipsum, używany od XV w.</h3><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p><h3>Fragment 1.10.32 z "de Finibus Bonorum et Malorum", napisanej przez Cycerona w 45 r.p.n.e.</h3><p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p><h3>Tłumaczenie H. Rackhama z 1914 roku</h3><p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p><h3>Fragment 1.10.33 z "de Finibus Bonorum et Malorum", napisanej przez Cycerona w 45 r.p.n.e.</h3><p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p><h3>Tłumaczenie H. Rackhama z 1914 roku</h3><p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>',
    //     link: "profhilo-z",
    //     unitPrice: 10,
    //     discount: 0,
    //     quantity: 1,
    //     visible: true,
    //     bestSeller: true,
    // }
];
