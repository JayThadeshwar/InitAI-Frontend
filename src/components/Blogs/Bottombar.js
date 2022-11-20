import React from 'react'

const Bottombar = () => {
  return (
    <div>
      <div class="w-full">
	    <section id="bottom-navigation" class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
		    <div id="tabs" class="flex justify-between font-[Montserrat]">
			    <a href="/" class="w-full focus:text-teal-500 hover:rounded-full hover:bg-gray-200 justify-center inline-block text-center pt-2 pb-1">
                    <ion-icon name="home-outline" size="large"></ion-icon>
				    <span class="tab tab-home block text-xs">Home</span>
			    </a>
			    <a href="/" class="w-full focus:text-teal-500 hover:rounded-full hover:bg-gray-200 justify-center inline-block text-center pt-2 pb-1">
                    <ion-icon name="bookmarks-outline" size="large"></ion-icon>
				<span class="tab tab-kategori block text-xs">Bookmarks</span>
			</a>
			<a href="/" class="w-full focus:text-teal-500 hover:rounded-full hover:bg-gray-200 justify-center inline-block text-center pt-2 pb-1">
                <ion-icon name="add-circle-outline" size="large"></ion-icon>
				<span class="tab tab-explore block text-xs">Add</span>
			</a>
			<a href="/" class="w-full focus:text-teal-500 hover:rounded-full hover:bg-gray-200 justify-center inline-block text-center pt-2 pb-1">
                <ion-icon name="document-outline" size="large"></ion-icon>
				<span class="tab tab-whishlist block text-xs">Whishlist</span>
			</a>
		</div>
	</section>
</div>
    </div>
  )
}

export default Bottombar
