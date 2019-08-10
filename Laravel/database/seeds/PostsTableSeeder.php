<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Post::create([
            'title'=>'Olá Mundis',
            'text'=>'
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Quem manda na minha terra sou euzis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
            Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Cevadis im ampola pa arma uma pindureta. Delegadis gente finis, bibendum egestas augue arcu ut est. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! 
            ',
            'image'=>'https://www.minervis.com/img/minervis-logo-flat.svg',
            'user_id'=>'1',
        ]);

        App\Post::create([
            'title'=>'Corporate Ipsum',
            'text'=>'
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
            ',
            'image'=>'https://www.thetimes.co.uk/imageserver/image/methode%2Ftimes%2Fprodmigration%2Fweb%2Fbin%2F7714f7fa-ce5a-3e17-974a-b898352257da.jpg?crop=1500%2C1000%2C0%2C0&resize=685',
            'user_id'=>'1',
        ]);

        App\Post::create([
            'title'=>'Corporate Ipsum 2',
            'text'=>'
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
            Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.
            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
            ',
            
            'image'=>'https://johannahedva.com/images/minerva.jpg',
            'user_id'=>'1',
        ]);
    }
}
